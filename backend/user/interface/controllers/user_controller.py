from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/users")


@router.post("", status_code=201)

class UserResponse(BaseModel):
	id: str
	email: str
	created_at: str
	updated_at: str
	class Config:
		orm_mode = True
