"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { tv } from "tailwind-variants";

interface Props {
  headerTitle: string;
  headerEndContent?: React.ReactNode;
  children: React.ReactNode;
  footerContent?: React.ReactNode;
  className?: string;
}

const wrapper = tv({
  base: "p-1 shrink-0",
});

const ItemLayout = ({
  headerTitle,
  headerEndContent,
  children,
  footerContent,
  className,
}: Props) => {
  return (
    <Card className={wrapper({ class: className })} shadow="sm">
      <CardHeader className="align-center h-10 justify-between pt-5">
        <h3 className="font-semibold leading-none">{headerTitle}</h3>
        {headerEndContent}
      </CardHeader>
      <CardBody className="gap-3">{children}</CardBody>
      {footerContent && <CardFooter>{footerContent}</CardFooter>}
    </Card>
  );
};

export default ItemLayout;
