from ulid import ULID
from datetime import datetime
from backend.user.domain.user import User
from backend.user.domain.repository.user_repo import IUserRepository
# from backend.user.infra.user_repo import UserRepository
from dependency_injector.wiring import inject
from fastapi import HTTPException, status
from utils.crypto import Crypto

#TODO: 비밀번호 변경, 회원탈퇴 등
class UserService:
	@inject
	def __init__(
		self,
		user_repo: IUserRepository,
		ulid: ULID,
		crypto: Crypto,
	):
		self.user_repo = user_repo
		self.ulid = ulid
		self.crypto = crypto

	def create_user(
		self,
		email: str,
		password: str,
	):
		_user = None
		try:
			_user = self.user_repo.find_by_email(email)
		except HTTPException as e:
			if e.status_code != 422:
				raise e
		if _user:
			raise HTTPException(status_code=422, detail="User already exists")

		now = datetime.now()
		user: User = User(
			id=self.ulid.generate(),
			email=email,
			password=self.crypto.encrypt(password),
			created_at=now,
			updated_at=now,
		)
		self.user_repo.save(user)
		return user


	def login(self, email: str, password: str):
		user = self.user_repo.find_by_email(email)
		if not self.crypto.verify(password, user.password):
			raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)

		#TODO: JWT 토큰 발급
