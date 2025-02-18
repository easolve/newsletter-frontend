"use client";

import { Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
import { tv } from "tailwind-variants";

interface Props {
  headerTitle: string;
  headerStartContent: React.ReactNode;
  headerEndContent?: React.ReactNode;
  children: React.ReactNode;
  footerContent?: React.ReactNode;
  className?: string;
}

const wrapper = tv({
  base: "p-1 grow min-h-[200px]",
});

const ItemLayout = ({
  headerTitle,
  headerStartContent,
  headerEndContent,
  children,
  footerContent,
  className,
}: Props) => {
  return (
    <Card className={wrapper({ class: className })} shadow="sm">
      <CardHeader className="align-center h-12 justify-between">
        <div className="flex items-center gap-2">
          {headerStartContent}
          <h3 className="text-xl font-medium">{headerTitle}</h3>
        </div>
        {headerEndContent}
      </CardHeader>
      <Divider />
      <CardBody className="gap-3">{children}</CardBody>
      {footerContent && <CardFooter>{footerContent}</CardFooter>}
    </Card>
  );
};

export default ItemLayout;
