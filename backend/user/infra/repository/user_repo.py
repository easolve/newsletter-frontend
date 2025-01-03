# IUserRepository를 인터페이스 삼아서 실제 로직 구현
# 내부 시스템이 사용하고자 하는 외부 시스템을 다룸
# ex) 데이터베이스에 저장된 데이토를 조회하는 SQL이 인프라 계층에 있어야 함

from user.domain.repository.user_repo import IUserRepository
from user.domain.user import User
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy import text, Connection
from fastapi.exceptions import HTTPException
from fastapi import status

class UserRepository(IUserRepository):
	async def find_by_email(self, email: str, conn: Connection):
		try:
			query = f"""
			SELECT *
			FROM users
			WHERE email = '{email}'
			"""
			result = await conn.execute(text(query))
			user = await result.fetchone()
			return user
		except SQLAlchemyError as e:
			raise HTTPException(
				status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
				detail="요청하신 서비스가 잠시 내부적으로 문제가 발생하였습니다.",
			)

	async def save(self, user: User, conn: Connection):
		try:
			query = f"""
			INSERT INTO users (email, password_hash, created_at, updated_at)
			VALUES ('{user.email}', '{user.password_hash}', '{user.created_at}', '{user.updated_at}')
			"""
			await conn.execute(text(query))
			await conn.commit()

		except SQLAlchemyError as e:
			await conn.rollback()
			raise HTTPException(
				status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
				detail="요청하신 서비스가 잠시 내부적으로 문제가 발생하였습니다.",
			)
