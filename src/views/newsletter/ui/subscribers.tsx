import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { UsersIcon } from "@/icons";
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
      <CardBody></CardBody>
    </Card>
  );
};

export default Subscribers;
