from datetime import datetime, timedelta
from fastapi import HTTPException, status, Depends
from jose import jwt, JWTError
from enum import StrEnum
from dataclasses import dataclass
from fastapi.security import OAuth2PasswordBearer
from typing import Annotated
from config import get_settings

# config 모듈을 이용해 환경변수로부터 설정 값들을 가져옴
settings = get_settings()
SECRET_KEY = "THIS_IS_SUPER_SECRET_KEY"
ALGORITHM = "HS256"

class Role(StrEnum):
	ADMIN = "ADMIN"
	USER = "USER"

def create_access_token(
	payload: dict,
	role: Role,
	expires_delta: timedelta = timedelta(minutes=15),
):
	expires = datetime.utcnow() + expires_delta
	payload.update(
		{
			"role": role,
			"exp": expires
		}
	)
	encoded_jwt = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)
	return encoded_jwt

def decode_access_token(token: str):
	try:
		payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
		return payload
	except JWTError:
		raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Could not validate credentials")

# tokenUrl -> 토큰을 발급할 엔드포인트 할당
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/users/login")

# 토큰의 페이로드
@dataclass
class CurrentUser:
	id: str
	role: Role

def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
	payload = decode_access_token(token)
	user_id = payload.get("user_id")
	role = payload.get("role")
	print(user_id, role)
	if not user_id or not role or role != Role.USER:
		raise HTTPException(status_code=status.HTTP_403_FORBIDDEN)
	return CurrentUser(user_id, Role(role))

def get_admin_user(token: Annotated[str, Depends(oauth2_scheme)]):
	payload = decode_access_token(token)

	role = payload.get("role")
	if not role or role != Role.ADMIN:
		raise HTTPException(status_code=status.HTTP_403_FORBIDDEN)
	return CurrentUser("ADMIN_USER_ID", role)
