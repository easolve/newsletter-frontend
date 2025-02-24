"use client";

import { Chip } from "@heroui/react";
import { capitalize } from "@/utils/capitalize";

interface Props {
  children: string;
}

const TopicChip = ({ children }: Props) => {
  return (
    <Chip
      color="default"
      variant="faded"
      radius="sm"
      className="border-0 dark:bg-content1 dark:shadow-small"
    >
      {`#${capitalize(children)}`}
    </Chip>
  );
};

export default TopicChip;
