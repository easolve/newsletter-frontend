"use client";

import { Card, CardHeader, Divider } from "@heroui/react";
import { BookOpenIcon } from "@/shared/ui/icons";
import { card } from "@/views/newsletter/ui/styles";

const History = () => {
  const { wrapper, header } = card();

  return (
    <Card className={wrapper()} shadow="sm">
      <CardHeader className={header()}>
        <BookOpenIcon />
        <h3>HISTORY</h3>
      </CardHeader>
      <Divider />
    </Card>
  );
};

export default History;
