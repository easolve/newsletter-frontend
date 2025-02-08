export const COLUMNS: Column[] = [
  { name: "NEWSLETTER", uid: "name", sortable: true },
  { name: "FREQUENCY", uid: "send_frequency", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

export const INITIAL_VISIBLE_COLUMNS: UID[] = COLUMNS.map(
  (column) => column.uid,
);
