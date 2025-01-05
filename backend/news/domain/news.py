from dataclasses import dataclass
from datetime import datetime

# @dataclass
# class Newsletter:
# 	id: int
# 	user_id: str
# 	name: str
# 	description: str
# 	send_frequency: str
# 	is_active: bool
# 	created_at: datetime
# 	updated_at: datetime

from pydantic import BaseModel

class Newsletter(BaseModel):
    id: int
    user_id: str
    name: str
    description: str
    send_frequency: str
    created_at: datetime
    updated_at: datetime
