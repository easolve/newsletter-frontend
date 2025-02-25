interface Column {
  name: string;
  uid: keyof Newsletter.History | "actions";
}

export const COLUMNS: Column[] = [
  { name: "TITLE", uid: "title" },
  { name: "STATUS", uid: "send_status" },
  { name: "ACTIONS", uid: "actions" },
];

interface StatusOption {
  name: string;
  uid: SentStatus;
}

export const STATUS_OPTION: StatusOption[] = [
  { name: "Success", uid: "SENT" },
  { name: "Pending", uid: "STANDBY" },
  { name: "Failed", uid: "FAILED" },
];
