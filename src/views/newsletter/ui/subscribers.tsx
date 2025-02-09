"use client";

import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import SubscriberTable from "@/features/subscriber-table";
import { UsersIcon } from "@/shared/ui/icons";
import { card } from "./styles";

const Subscribers = () => {
  const { wrapper, header } = card();

  return (
    <Card className={wrapper()} shadow="sm">
      <CardHeader className={header()}>
        <UsersIcon />
        <h3>SUBSCRIBERS</h3>
      </CardHeader>
      <Divider />
      <CardBody>
        <SubscriberTable />
      </CardBody>
    </Card>
  );
};

export default Subscribers;
