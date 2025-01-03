from dependency_injector import containers, providers
from backend.user.application.user_service import UserService

class Container(containers.DeclarativeContainer):
	# 의존성 관리한 패키지 추가
	wiring_config = containers.WiringConfiguration(
		packages=[
			"user",
		]
	)
	user_service = providers.Factory(UserService)
