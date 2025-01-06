from sqlalchemy.ext.asyncio import create_async_engine, AsyncEngine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.ext.asyncio import async_sessionmaker, AsyncSession
from config import get_settings

settings = get_settings()
SQLALCHEMY_DATABASE_URL = (
	"mysql+aiomysql://"
	f"{settings.database_username}:{settings.database_password}"
	f"@127.0.0.1:{settings.database_port}/newsletter_schema"
)
engine: AsyncEngine = create_async_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = async_sessionmaker(
	class_=AsyncSession,
	autocommit=False,
	autoflush=False,
	expire_on_commit=False,
	bind=engine
)

# 선언형 클래스를 정의하기 위한 기본 클래스를 생성
Base = declarative_base()

