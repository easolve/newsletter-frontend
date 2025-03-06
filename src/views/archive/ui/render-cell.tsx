import { type Key } from "react";
import { getTime } from "@/shared/lib";
import { DateTime, SentStatusChip } from "@/shared/ui";
import HistoryActionsDropdown from "./actions-dropdown";

export const renderCell = (history: Newsletter.History, key: Key) => {
  const cellValue = history[key as keyof Newsletter.History];

  switch (key) {
    case "created_at":
    case "updated_at":
      return getTime(cellValue as string);
    case "sent_at":
      return <DateTime date={cellValue} />;
    case "actions":
      return <HistoryActionsDropdown history={history} />;
    case "sent_status":
      return <SentStatusChip status={history.sent_status} />;
    default:
      return cellValue;
  }
};
