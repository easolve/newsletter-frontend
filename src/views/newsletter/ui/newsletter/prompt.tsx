"use client";

import { ScrollShadow } from "@heroui/react";

interface Props {
  custom_prompt: string;
}

const Prompt = ({ custom_prompt }: Props) => {
  if (!custom_prompt) {
    return (
      <div className="flex size-full items-center justify-center pb-7">
        <p className="text-foreground-400">No prompt</p>
      </div>
    );
  }

  return <ScrollShadow className="max-h-60">{custom_prompt}</ScrollShadow>;
};

export default Prompt;
