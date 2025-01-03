import paramiko
from sshtunnel import SSHTunnelForwarder
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

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
	print("SSH Connection Established")


SQLALCHEMY_DATABASE_URL = "mysql+mysqldb://admin:n3PP42orFUld3l6BgZho@newsletter-db.c3ok6koccige.ap-northeast-2.rds.amazonaws.com/newsletter_schema"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
