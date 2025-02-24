"use client";

import { Button, Input, type Selection, Textarea } from "@heroui/react";
import { useCallback, useMemo, useState } from "react";
import SelectFrequency from "@/shared/ui/select-frequency";
import ItemLayout from "../item-layout";
import ActionsDropdown from "./actions-dropdown";
import Generate from "./generate";

interface Props {
  newsletter: Newsletter.Info;
}

const Newsletter = ({ newsletter }: Props) => {
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

  const footerContent = useMemo(() => {
    if (isEditing) {
      return (
        <div className="grid w-full grid-cols-2 gap-1">
          <Button color="danger" variant="light" onPress={handleClickCancel}>
            Cancel
          </Button>
          <Button color="primary" isDisabled>
            Save
          </Button>
        </div>
      );
    }
    return <Generate />;
  }, [isEditing]);

  return (
    <ItemLayout
      className="w-full md:max-w-xs"
      headerTitle="Newsletter"
      headerEndContent={<ActionsDropdown onEdit={handleClickEdit} />}
      footerContent={footerContent}
    >
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
    </ItemLayout>
  );
};

export default Newsletter;
