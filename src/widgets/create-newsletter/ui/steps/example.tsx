"use client";

import { Divider, Spinner } from "@heroui/react";
import { useExampleStore } from "@/features/generate-example";

const Example = () => {
  const title = useExampleStore((state) => state.title);
  const content = useExampleStore((state) => state.content);

  if (!content) {
    return (
      <div className="flex h-1/2 w-full items-center justify-center">
        <Spinner color="primary" label="Generating news sample..." />
      </div>
    );
  }

  return (
    <div className="mt-4 flex flex-col">
      <h2 className="mb-1 text-2xl font-semibold">{title}</h2>
      <Divider />
      <div className="mt-3 whitespace-pre-wrap">{content}</div>
    </div>
  );
};

export default Example;
