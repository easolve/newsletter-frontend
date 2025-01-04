from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict

# 환경변수를 다루는 클래스
class Settings(BaseSettings):
	model_config = SettingsConfigDict(
		env_file=".env",
		env_file_encoding="utf-8",
	)
	database_username: str
	database_password: str
	database_port: int
	jwt_secret: str

# LRU 알고리즘을 통한 캐싱, 다른 모듈에서 환경변수 쓸 때 사용
@lru_cache()
def get_settings():
	return Settings()
