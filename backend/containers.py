from dependency_injector import containers, providers

from user.application.user_service import UserService
from news.application.news_service import NewsService

from user.infra.repository.user_repo import UserRepository
from news.infra.repository.news_repo import NewsRepository

class Container(containers.DeclarativeContainer):
	# 의존성 관리한 패키지 추가
	wiring_config = containers.WiringConfiguration(
		packages=[
			"user",
			"news"
		]
	)
	news_repo = providers.Factory(NewsRepository)
	news_service = providers.Factory(NewsService, news_repo=news_repo)
	user_repo = providers.Factory(UserRepository)
	user_service = providers.Factory(UserService, user_repo=user_repo)
