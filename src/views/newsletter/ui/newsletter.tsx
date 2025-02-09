"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
  Textarea,
} from "@heroui/react";
import { EnvelopeIcon } from "@/shared/ui/icons";
import SelectFrequency from "@/shared/ui/select-frequency";
import { card } from "./styles";

interface Props {
  newsletter: Newsletter;
}

const Newsletter = ({ newsletter }: Props) => {
  const { wrapper, header } = card();

  return (
    <Card className={wrapper({ class: "w-full md:max-w-xs" })} shadow="sm">
      <CardHeader className={header()}>
        <EnvelopeIcon />
        <h3>NEWSLETTER</h3>
      </CardHeader>
      <Divider />
      <CardBody className="gap-3">
        <Input
          isDisabled
          labelPlacement="outside"
          label="Name"
          defaultValue={newsletter.name}
        />
        <Textarea
          isDisabled
          labelPlacement="outside"
          label="Description"
          defaultValue={newsletter.description}
        />
        <SelectFrequency
          isDisabled
          labelPlacement="outside"
          defaultSelectedKeys={[newsletter.send_frequency]}
        />
      </CardBody>
      <CardFooter>
        <Button className="w-full" color="primary">
          Send
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Newsletter;
