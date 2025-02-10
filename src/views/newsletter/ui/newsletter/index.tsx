"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
  type Selection,
  Textarea,
} from "@heroui/react";
import { useCallback, useState } from "react";
import { EnvelopeIcon } from "@/shared/ui/icons";
import SelectFrequency from "@/shared/ui/select-frequency";
import { card } from "../styles";
import ActionsDropdown from "./actions-dropdown";
import Generate from "./generate";

interface Props {
  newsletter: Newsletter;
}

const Newsletter = ({ newsletter }: Props) => {
  const { wrapper, header } = card();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(newsletter.name);
  const [description, setDescription] = useState(newsletter.description);
  const [frequency, setFrequency] = useState<Selection>(
    new Set([newsletter.send_frequency]),
  );

  const handleClickEdit = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleClickCancel = useCallback(() => {
    setIsEditing(false);
    setName(newsletter.name);
    setDescription(newsletter.description);
    setFrequency(new Set([newsletter.send_frequency]));
  }, []);

  return (
    <Card className={wrapper({ class: "w-full md:max-w-xs" })} shadow="sm">
      <CardHeader className={header({ class: "justify-between" })}>
        <div className="flex gap-2">
          <EnvelopeIcon />
          <h3>NEWSLETTER</h3>
        </div>
        <ActionsDropdown onEdit={handleClickEdit} />
      </CardHeader>
      <Divider />
      <CardBody className="gap-3">
        <Input
          isDisabled={!isEditing}
          labelPlacement="outside"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Textarea
          isDisabled={!isEditing}
          labelPlacement="outside"
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <SelectFrequency
          isDisabled={!isEditing}
          labelPlacement="outside"
          selectedKeys={frequency}
          onSelectionChange={setFrequency}
        />
      </CardBody>
      <CardFooter>
        {isEditing ? (
          <div className="grid w-full grid-cols-2 gap-1">
            <Button color="danger" variant="light" onPress={handleClickCancel}>
              Cancel
            </Button>
            <Button color="primary" isDisabled>
              Save
            </Button>
          </div>
        ) : (
          <Generate />
        )}
      </CardFooter>
    </Card>
  );
};

export default Newsletter;
