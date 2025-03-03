"use client";

import { Link } from "@heroui/react";

interface Props {
  sources: string[];
}

const Sources = ({ sources }: Props) => {
  return (
    <div className="flex flex-wrap gap-2">
      {sources.map((source) => (
        <Link
          isExternal
          showAnchorIcon
          underline="hover"
          key={source}
          href={source}
        >
          {source}
        </Link>
      ))}
    </div>
  );
};

export default Sources;
