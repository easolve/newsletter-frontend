import { type Key } from "react";
import { SentStatusChip } from "@/shared/ui";
import HistoryActionsDropdown from "./actions-dropdown";

export const renderCell = (history: Newsletter.History, key: Key) => {
  const cellValue = history[key as keyof Newsletter.History];

  switch (key) {
    case "actions":
      return <HistoryActionsDropdown history={history} />;
    case "sent_at":
      return <SentStatusChip status={history.send_status} />;
    default:
      return cellValue;
  }
};
