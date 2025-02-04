"""create newsletter subscribers table

Revision ID: 31db0e6ac558
Revises: e4ee6b6ea883
Create Date: 2025-02-05 00:19:55.430203

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "31db0e6ac558"
down_revision: Union[str, None] = "e4ee6b6ea883"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
