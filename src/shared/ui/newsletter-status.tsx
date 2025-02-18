"use client";

import { Chip } from "@heroui/react";

interface Props {
  isActive: boolean;
}

const NewsletterStatus = ({ isActive }: Props) => {
  if (isActive) {
    return (
      <Chip color="success" variant="dot">
        Active
      </Chip>
    );
  }

  return (
    <Chip color="danger" variant="dot">
      Paused
    </Chip>
  );
};

export default NewsletterStatus;
