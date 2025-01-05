from news.domain.repository.news_repo import INewsRepository
from dependency_injector.wiring import inject

class NewsService:
	@inject
	def __init__(
		self,
		news_repo: INewsRepository,
	):
		self.news_repo = news_repo

	async def get_news(
		self,
		user_id: str,
	):
		return await self.news_repo.get_news(user_id)
