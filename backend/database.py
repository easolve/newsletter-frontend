from sqlalchemy.ext.asyncio import create_async_engine, AsyncEngine
from sqlalchemy.exc import SQLAlchemyError
from fastapi import status
from fastapi.exceptions import HTTPException
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "mysql+aiomysql://root:test@127.0.0.1:3307/newsletter_schema"
engine: AsyncEngine = create_async_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 선언형 클래스를 정의하기 위한 기본 클래스를 생성
Base = declarative_base()

async def context_get_conn():
	conn = None
	try:
		conn = await engine.connect()
		yield conn
	except SQLAlchemyError as e:
		print(e)
		raise HTTPException(
			status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
			detail="요청하신 서비스가 잠시 내부적으로 문제가 발생하였습니다.",
		)
	finally:
		if conn:
			await conn.close()

