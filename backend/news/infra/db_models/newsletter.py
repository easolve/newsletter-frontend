from datetime import datetime
from sqlalchemy import String, DateTime, ForeignKey, Table, Column, Text
from sqlalchemy.orm import Mapped, mapped_column
from database import Base
from user.infra.db_models.users import Users
from sqlalchemy.orm import relationship
from typing import List
from typing import Optional

newsletter_topic = Table(
	"newsletter_topic",
	Base.metadata,
	Column("newsletter_id",ForeignKey("newsletters.id")),
	Column("topic_id", ForeignKey("topics.id")),
)

newsletter_source = Table(
	"newsletter_source",
	Base.metadata,
	Column("newsletter_id", ForeignKey("newsletters.id")),
	Column("source_id", ForeignKey("sources.id")),
)


class Newsletters(Base):
	__tablename__ = "newsletters"

	id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
	user_id: Mapped[str] = mapped_column(ForeignKey("users.id"), nullable=False),
	format_id: Mapped[Optional[int]] = mapped_column(ForeignKey("formats.id"))
	email: Mapped[str] = mapped_column(String(64), nullable=False)
	created_at: Mapped[datetime] = mapped_column(DateTime, nullable=False)
	updated_at: Mapped[datetime] = mapped_column(DateTime, nullable=False)

	users: Mapped["Users"] = relationship(back_populates="newsletters")
	formats: Mapped[Optional["Formats"]] = relationship(back_populates="newsletters")
	newsletter_sent: Mapped[List["NewslettersSent"]] = relationship(back_populates="newsletters")
	topics: Mapped[List["Topics"]] = relationship(
		secondary=newsletter_topic,
		back_populates="newsletters"
	)
	sources: Mapped[List["Sources"]] = relationship(
		secondary=newsletter_source,
		back_populates="newsletters"
	)

class NewslettersSent(Base):
	__tablename__ = "newsletters_sent"

	id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
	newsletter_id: Mapped[int] = mapped_column(ForeignKey("newsletters.id"), nullable=False)
	name: Mapped[str] = mapped_column(String(256), nullable=False)
	generated_content: Mapped[str] = mapped_column(Text, nullable=False)
	sent_at: Mapped[datetime] = mapped_column(DateTime, nullable=False)
	created_at: Mapped[datetime] = mapped_column(DateTime, nullable=False)
	updated_at: Mapped[datetime] = mapped_column(DateTime, nullable=False)
	newsletters: Mapped["Newsletters"] = relationship(back_populates="newsletters_sent")


class Sources(Base):
	__tablename__ = "sources"

	id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
	name: Mapped[str] = mapped_column(String(256), nullable=False)
	source_url: Mapped[str] = mapped_column(String(256), nullable=False)
	created_at: Mapped[datetime] = mapped_column(DateTime, nullable=False)
	updated_at: Mapped[datetime] = mapped_column(DateTime, nullable=False)

	newsletters: Mapped[List["Newsletters"]] = relationship(
		secondary=newsletter_source,
		back_populates="sources"
	)


class Topics(Base):
	__tablename__ = "topics"

	id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
	name: Mapped[str] = mapped_column(String(256), nullable=False)
	created_at: Mapped[datetime] = mapped_column(DateTime, nullable=False)
	updated_at: Mapped[datetime] = mapped_column(DateTime, nullable=False)

	newsletters: Mapped[List["Newsletters"]] = relationship(
		secondary=newsletter_topic,
		back_populates="topics"
	)

class Formats(Base):
	__tablename__ = "formats"

	id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
	name: Mapped[str] = mapped_column(String(256), nullable=False)
	description: Mapped[str] = mapped_column(String(512), nullable=False)
	created_at: Mapped[datetime] = mapped_column(DateTime, nullable=False)
	updated_at: Mapped[datetime] = mapped_column(DateTime, nullable=False)

	newsletters: Mapped[List["Newsletters"]] = relationship(back_populates="formats")
