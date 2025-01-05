from abc import ABCMeta, abstractmethod
from user.domain.user import User

class INewsRepository(metaclass=ABCMeta):
	@abstractmethod
	async def get_news(self, user: User):
		"""
		유저가 생성한 뉴스레터 정보를 가져온다.
		"""
		raise NotImplementedError
