import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { VerticalDotsIcon } from "@/shared/ui/icons";

export const renderCell = (subscriber: Subscriber, columnKey: React.Key) => {
  const cellValue = subscriber[columnKey as keyof Subscriber];

  switch (columnKey) {
    case "created_at": {
      const date = new Date(cellValue);
      return (
        <div className="flex gap-2">
          <div>
            {date.toLocaleDateString("en-EN", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
          <div>
            {date.toLocaleTimeString("en-EN", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      );
    }

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
