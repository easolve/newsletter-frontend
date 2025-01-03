import paramiko
from sshtunnel import SSHTunnelForwarder
from sqlalchemy.ext.asyncio import create_async_engine, AsyncEngine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.exc import SQLAlchemyError
from fastapi import status
from fastapi.exceptions import HTTPException

# SSH INFO
SSH_HOST="3.39.74.186"
SSH_PORT=22
SSH_USERNAME="ubuntu"
SSH_PASSWORD="Sunghyun4718@"
SSH_PRIVATE_KEY="/Users/sunko/Documents/newsletter-app/backend/sunkoaws.pem"

# MYSQL INFO
DB_USERNAME="admin"
DB_PASSWORD="n3PP42orFUld3l6BgZho"
DB_NAME="newsletter_schema"
DB_HOST="newsletter-db.c3ok6koccige.ap-northeast-2.rds.amazonaws.com"
DB_PORT=3306

# SSH TUNNEL
with SSHTunnelForwarder(
	(SSH_HOST, SSH_PORT),
	ssh_username=SSH_USERNAME,
	ssh_password=SSH_PASSWORD,
	ssh_pkey=SSH_PRIVATE_KEY,
	remote_bind_address=(DB_HOST, DB_PORT),
) as tunnel:
	print("****SSH Tunnel Established****")
	SQLALCHEMY_DATABASE_URL = "mysql+aiomysql://admin:n3PP42orFUld3l6BgZho@newsletter-db.c3ok6koccige.ap-northeast-2.rds.amazonaws.com/newsletter_schema"
	engine: AsyncEngine = create_async_engine(
		SQLALCHEMY_DATABASE_URL,
		pool_size=10,
		max_overflow=0,
		pool_recycle=300,
	)
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

