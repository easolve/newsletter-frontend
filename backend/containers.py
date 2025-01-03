from dependency_injector import containers, providers
from user.application.user_service import UserService
from user.infra.repository.user_repo import UserRepository

class Container(containers.DeclarativeContainer):
	# 의존성 관리한 패키지 추가
	wiring_config = containers.WiringConfiguration(
		packages=[
			"user",
		]
	)
	user_repo = providers.Factory(UserRepository)
	user_service = providers.Factory(UserService, user_repo=user_repo)
