from news.domain.repository.news_repo import INewsRepository
from database import SessionLocal
from news.infra.db_models.newsletter import Newsletters
from sqlalchemy.future import select
from news.domain.news import Newsletter as NewsletterVO
from utils.db_utils import row_to_dict
from typing import List
from sqlalchemy.exc import SQLAlchemyError
from fastapi.exceptions import HTTPException
from fastapi import status
from news.domain.news import Topic as TopicVO
from news.domain.news import Source as SourceVO
from news.infra.db_models.newsletter import Topics
from news.infra.db_models.newsletter import Sources


class NewsRepository(INewsRepository):
	async def get_news(self, user_id: str) -> List[NewsletterVO]:
		try:
			async with SessionLocal() as db:
				result = await db.execute(select(Newsletters).where(Newsletters.user_id == user_id))
				news = result.scalars().all()
				return [NewsletterVO(**row_to_dict(n)) for n in news]
		except SQLAlchemyError as e:
			raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))
		except Exception as e:
			raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))

	async def save_news(self, user_id: str, news: NewsletterVO):
		try:
			async with SessionLocal() as db:
				topics: list[Topics] = []
				for topic in news.topics:
					existing_topic_result = await db.execute(select(Topics).where(Topics.name == topic.name))
					existing_topic = existing_topic_result.scalar_one_or_none()
					if not existing_topic:
						topic = Topics(
							name=topic.name,
							created_at=topic.created_at,
							updated_at=topic.updated_at,
						)
						db.add(topic)
						topics.append(topic)
					else:
						topics.append(existing_topic)

				sources: list[Sources] = []
				for source in news.sources:
					existing_source_result = await db.execute(select(Sources).where(Sources.source_url == source.source_url))
					existing_source = existing_source_result.scalar_one_or_none()
					if not existing_source:
						source = Sources(
							name=source.name,
							source_url=source.source_url,
							created_at=source.created_at,
							updated_at=source.updated_at,
						)
						db.add(source)
						sources.append(source)
					else:
						sources.append(existing_source)

				newsletter = Newsletters(
					user_id=user_id,
					name=news.name,
					description=news.description,
					custom_prompt=news.custom_prompt,
					send_frequency=news.send_frequency,
					is_active=news.is_active,
					topics=topics,
					sources=sources,
					created_at=news.created_at,
					updated_at=news.updated_at,
				)
				db.add(newsletter)
				await db.commit()
				print("뉴스레터가 성공적으로 생성되었습니다.")
		except SQLAlchemyError as e:
			raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))
		except Exception as e:
			raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))
