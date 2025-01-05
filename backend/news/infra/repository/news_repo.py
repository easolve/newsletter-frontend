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
