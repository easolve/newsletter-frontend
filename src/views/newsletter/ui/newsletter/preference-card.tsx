"use client";

import { Card, CardBody } from "@heroui/react";

interface Props {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const PreferenceCard = ({ icon, title, children }: Props) => {
  return (
    <Card shadow="sm" className="w-fit p-1">
      <CardBody className="flex flex-row items-center gap-4">
        <Card shadow="none" className="bg-default-100" radius="sm">
          <CardBody className="text-foreground-500">{icon}</CardBody>
        </Card>
        <div className="flex flex-col">
          <div className="text-sm font-semibold">{title}</div>
          <div className="text-xl font-extralight">{children}</div>
        </div>
      </CardBody>
    </Card>
  );
};

export default PreferenceCard;
