"use client";

import { Chip } from "@heroui/react";
import { capitalize } from "@/shared/lib";

interface Props {
  topics: string[];
}

const Topics = ({ topics }: Props) => {
  return (
    <div className="mt-2 flex gap-2">
      {topics.map((topic) => (
        <Chip
          key={topic}
          color="default"
          variant="faded"
          radius="sm"
          className="border-0 dark:bg-content1 dark:shadow-small"
        >
          {`#${capitalize(topic)}`}
        </Chip>
      ))}
    </div>
  );
};

export default Topics;
