from dataclasses import dataclass
from datetime import datetime
from pydantic import BaseModel

class Topic(BaseModel):
    name: str
    created_at: datetime
    updated_at: datetime

class Source(BaseModel):
    name: str
    source_url: str
    created_at: datetime
    updated_at: datetime

class Newsletter(BaseModel):
    user_id: str
    name: str
    description: str
    custom_prompt: str | None
    send_frequency: str
    is_active: bool
    topics: list[Topic]
    sources: list[Source]
    created_at: datetime
    updated_at: datetime


