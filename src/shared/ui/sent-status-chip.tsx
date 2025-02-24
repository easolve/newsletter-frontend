"use client";

import { Chip, type ChipProps } from "@heroui/react";

interface Props {
  status: SentStatus;
}

const STATUS_MAP: {
  [key in SentStatus]: { color: ChipProps["color"]; label: string };
} = {
  FAILED: {
    color: "danger",
    label: "Failed",
  },
  SENT: {
    color: "success",
    label: "Success",
  },
  STANDBY: {
    color: "warning",
    label: "Pending",
  },
  NONE: {
    color: "default",
    label: "Never Sent",
  },
};

const SentStatusChip = ({ status }: Props) => {
  const { color, label } = STATUS_MAP[status];
  return (
    <Chip color={color} variant="flat">
      {label}
    </Chip>
  );
};

export default SentStatusChip;
