interface Column {
  name: string;
  uid: keyof Subscriber | "actions";
  sortable?: boolean;
}

export const SUBSCRIBER_COLUMNS: Column[] = [
  { name: "EMAIL", uid: "email", sortable: true },
  { name: "CREATED", uid: "created_at", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];
