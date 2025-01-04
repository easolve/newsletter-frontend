from sqlalchemy.ext.asyncio import create_async_engine, AsyncEngine
from sqlalchemy.exc import SQLAlchemyError
from fastapi import status
from fastapi.exceptions import HTTPException
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker

SQLALCHEMY_DATABASE_URL = "mysql+aiomysql://root:test@127.0.0.1:3307/newsletter_schema"
engine: AsyncEngine = create_async_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = async_sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 선언형 클래스를 정의하기 위한 기본 클래스를 생성
Base = declarative_base()

