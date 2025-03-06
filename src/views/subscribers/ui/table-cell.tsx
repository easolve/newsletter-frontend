import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { DateTime } from "@/shared/ui";
import { VerticalDotsIcon } from "@/shared/ui/icons";

export const renderCell = (subscriber: Subscriber, columnKey: React.Key) => {
  const cellValue = subscriber[columnKey as keyof Subscriber];

  switch (columnKey) {
    case "created_at":
      return <DateTime date={subscriber.created_at} />;
    case "actions":
      return (
        <div className="relative flex items-center justify-end gap-2">
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly size="sm" variant="light">
                <VerticalDotsIcon className="text-default-300" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu disabledKeys={["delete"]}>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Delete
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      );
    default:
      return cellValue;
  }
};
