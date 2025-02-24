"use client";

import { ScrollShadow } from "@heroui/react";

interface Props {
  children: React.ReactNode;
}

const Prompt = ({ children }: Props) => {
  return <ScrollShadow className="max-h-60">{children}</ScrollShadow>;
};

export default Prompt;
