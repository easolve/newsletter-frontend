interface Column {
  name: string;
  uid: keyof Newsletter.History | "actions";
}

export const COLUMNS: Column[] = [
  { name: "TITLE", uid: "title" },
  { name: "CREATED", uid: "created_at" },
  { name: "UPDATED", uid: "updated_at" },
  { name: "STATUS", uid: "sent_status" },
  { name: "SENT TIME", uid: "sent_at" },
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
