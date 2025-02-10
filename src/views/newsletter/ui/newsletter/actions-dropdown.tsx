import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import React from "react";
import { VerticalDotsIcon } from "@/shared/ui/icons";

interface Props {
  onEdit: () => void;
}

const ActionsDropdown = ({ onEdit }: Props) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly size="sm" variant="light">
          <VerticalDotsIcon />
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem key="edit" onPress={onEdit}>
          Edit
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ActionsDropdown;
