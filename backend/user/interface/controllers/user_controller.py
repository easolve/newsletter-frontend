# 인프라 계층의 시스템과 애플리케이션 및 도메인 계층을 연결하는 역할
# 1. 외부와 내부 사이의 데이터 변환
# 2. 인터페이스 구현
# 3. 외부 종속성과 분리

from fastapi import APIRouter, Depends
from pydantic import BaseModel, Field, EmailStr
from dependency_injector.wiring import inject, Provide
from user.application.user_service import UserService
from containers import Container
from sqlalchemy import Connection
from datetime import datetime

router = APIRouter(prefix="/api/users")

class CreateUserBody(BaseModel):
	email: EmailStr = Field(max_length=64)
	password: str = Field(min_length=8, max_length=64)

class UserResponse(BaseModel):
	id: str
	email: str
	created_at: datetime
	updated_at: datetime

@router.post("/register", status_code=201, response_model=UserResponse)
@inject
async def create_user(
	user: CreateUserBody,
	user_service: UserService = Depends(Provide[Container.user_service])
):
	created_user = await user_service.create_user(
		email=user.email,
		password=user.password,
	)
	return created_user
