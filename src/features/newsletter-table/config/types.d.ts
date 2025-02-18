interface Column {
  name: string;
  uid: UID;
  sortable?: boolean;
}

type UID = keyof Newsletter.Info | "actions";
