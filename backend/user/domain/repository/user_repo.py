from abc import ABCMeta, abstractmethod
from backend.user.domain.user import User
from typing import List

class IUserRepository(metaclass=ABCMeta):
	@abstractmethod
	def find_by_id(self, user_id: int) -> User:
		pass

	@abstractmethod
	def find_by_email(self, email: str) -> User:
		pass

	@abstractmethod
	def save(self, user: User) -> None:
		pass

	@abstractmethod
	def delete(self, user: User) -> None:
		pass

	@abstractmethod
	def find_all(self) -> List[User]:
		pass
