"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { tv } from "tailwind-variants";
import { ROUTES } from "@/shared/config";
import { ArrowRightIcon } from "@/shared/ui";

interface Props {
  className?: string;
}

const style = tv({
  base: "max-w-fit italic",
});

const TryItButton = ({ className }: Props) => {
  const router = useRouter();

  return (
    <Button
      size="lg"
      variant="ghost"
      color="primary"
      className={style({ class: className })}
      radius="full"
      onPress={() => router.push(ROUTES.product)}
      endContent={<ArrowRightIcon />}
    >
      Try AI-Generating Now
    </Button>
  );
};

export default TryItButton;
