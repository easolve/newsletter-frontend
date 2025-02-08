"use client";

import { Card, CardBody, CardHeader } from "@heroui/react";
import NewsletterTable from "@/features/newsletter-table";
import { title } from "@/styles/primitives";

interface Props {
  newsletters: Newsletter[];
}

const Newsletter = ({ newsletters }: Props) => {
  return (
    <Card className="h-full w-full p-6" shadow="sm">
      <CardHeader>
        <h1 className={title({ size: "sm" })}>My Newsletters</h1>
      </CardHeader>
      <CardBody>
        <NewsletterTable newsletters={newsletters} />
      </CardBody>
    </Card>
  );
};

export default Newsletter;
