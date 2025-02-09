"use client";

import { Textarea } from "@heroui/react";
import { SearchLinearIcon } from "@/shared/ui/icons";
import { subtitle, title } from "@/styles/primitives";

export default function Home() {
  return (
    <section className="flex size-full items-center px-6">
      <div className="relative z-20 flex w-full flex-col gap-4">
        <div className="text-left leading-8 md:leading-10">
          <h1 className={title()}>Your News, Your Style.</h1>
        </div>
        <h2
          className={subtitle({
            fullWidth: true,
            class: "text-center md:text-left",
          })}
        >
          Create your own newsletter with just a few clicks.
        </h2>
        <div className="flex flex-col items-start justify-center">
          <Textarea
            placeholder="Enter what you want to read about..."
            classNames={{
              base: "max-w-[600px] w-full",
              inputWrapper: "shadow-lg",
            }}
            radius="full"
            type="text"
            minRows={1}
            maxRows={8}
            endContent={<SearchLinearIcon />}
          />
        </div>
      </div>
    </section>
  );
}
