"use client";

import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

interface Props {
  headerTitle: string;
  headerStartContent: React.ReactNode;
  headerEndContent?: React.ReactNode;
  children: React.ReactNode;
}

const ItemLayout = ({
  headerTitle,
  headerStartContent,
  headerEndContent,
  children,
}: Props) => {
  return (
    <Card className="min-h-[200px] grow p-1" shadow="sm">
      <CardHeader className="align-center h-12 justify-between">
        <div className="flex gap-2">
          {headerStartContent}
          <h3>{headerTitle}</h3>
        </div>
        {headerEndContent}
      </CardHeader>
      <Divider />
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default ItemLayout;
