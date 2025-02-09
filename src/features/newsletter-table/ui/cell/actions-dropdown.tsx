"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { VerticalDotsIcon } from "@/shared/ui/icons";

interface Props {
  newsletterId: Newsletter["id"];
}

const ActionsDropdown = ({ newsletterId }: Props) => {
  const router = useRouter();
  return (
    <div className="relative flex items-center justify-end gap-2">
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly size="sm" variant="light">
            <VerticalDotsIcon className="text-default-300" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem
            key="view"
            onPress={() => router.push(`/newsletter/${newsletterId}`)}
          >
            View
          </DropdownItem>
          <DropdownItem key="edit">Edit</DropdownItem>
          <DropdownItem key="delete" className="text-danger" color="danger">
            Delete
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ActionsDropdown;
