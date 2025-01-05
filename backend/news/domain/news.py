from dataclasses import dataclass
from datetime import datetime

@dataclass
class Newsletter:
	id: int
	user_id: str
	name: str
	description: str
	send_frequency: str
	created_at: datetime
	updated_at: datetime
