"""delete name colum in Source table

Revision ID: e148328a3301
Revises: f019b21b7fa3
Create Date: 2025-01-07 14:40:45.029190

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'e148328a3301'
down_revision: Union[str, None] = 'f019b21b7fa3'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
