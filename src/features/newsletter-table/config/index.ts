import type { ChipProps } from "@heroui/react";

export const COLUMNS: Column[] = [
  { name: "NEWSLETTER", uid: "name", sortable: true },
  { name: "STATUS", uid: "is_active", sortable: true },
  { name: "FREQUENCY", uid: "send_frequency" },
  { name: "SEND TIME", uid: "send_time" },
  { name: "LAST DELIVERY", uid: "last_send_status", sortable: true },
  { name: "SUBSCRIBERS", uid: "subscribers_count", sortable: true },
  { name: "LANGUAGE", uid: "language" },
  { name: "CREATED", uid: "created_at", sortable: true },
  { name: "UPDATED", uid: "updated_at", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

export const INITIAL_VISIBLE_COLUMNS: UID[] = [
  "name",
  "is_active",
  "send_frequency",
  "send_time",
  "language",
  "actions",
  "subscribers_count",
  "last_send_status",
];

export const COLOR_MAP = {
  daily: "warning",
  weekly: "primary",
  "bi-weekly": "success",
  monthly: "secondary",
} satisfies Record<Frequency, ChipProps["color"]>;
