from news.domain.repository.news_repo import INewsRepository
from dependency_injector.wiring import inject
from news.domain.news import Newsletter
from datetime import datetime
from news.domain.news import Topic
from news.domain.news import Source
from ulid import ULID


class NewsService:
	@inject
	def __init__(
		self,
		news_repo: INewsRepository,
	):
		self.news_repo = news_repo
		self.ulid = ULID()

	async def get_news(
		self,
		user_id: str,
	):
		return await self.news_repo.get_news(user_id)

	async def create_news(
		self,
		user_id: str,
		name: str,
		description: str,
		custom_prompt: str,
		send_frequency: str,
		is_active: bool,
		topic: list[str] = [],
		source: list[str] = [],

	):
		now = datetime.now()

		topics = [
			Topic(
				name=topic_name,
				created_at=now,
				updated_at=now,
			)
			for topic_name in topic
		]

		sources = [
			Source(
				name="이건 언제 정하지?",
				source_url=source_url,
				created_at=now,
				updated_at=now,
			)
			for source_url in source
		]

		newsletter = Newsletter(
			user_id=user_id,
			name=name,
			description=description,
			custom_prompt=custom_prompt,
			send_frequency=send_frequency,
			is_active=is_active,
			topics=topics,
			sources=sources,
			created_at=now,
			updated_at=now,
		)
		# 뉴스레터 생성
		await self.news_repo.save_news(user_id, newsletter)
		return newsletter
