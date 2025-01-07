"""new base class

Revision ID: 086b24dcfc46
Revises: e148328a3301
Create Date: 2025-01-07 14:57:43.943401

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '086b24dcfc46'
down_revision: Union[str, None] = 'e148328a3301'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
