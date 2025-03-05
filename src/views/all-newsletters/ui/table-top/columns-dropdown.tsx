import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  type DropdownMenuProps,
  DropdownTrigger,
} from "@heroui/react";
import { capitalize } from "@/shared/lib";
import { ChevronDownIcon } from "@/shared/ui/icons";
import { COLUMNS } from "../../config/table";

interface Props {
  selectedKeys: DropdownMenuProps["selectedKeys"];
  onSelectionChange: DropdownMenuProps["onSelectionChange"];
}

const ColumnsDropdown = (props: Props) => {
  return (
    <Dropdown>
      <DropdownTrigger className="sm:flex">
        <Button
          endContent={<ChevronDownIcon className="text-small" />}
          variant="flat"
        >
          Columns
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Table Columns"
        closeOnSelect={false}
        selectionMode="multiple"
        {...props}
      >
        {COLUMNS.filter((column) => column.uid !== "name").map((column) => (
          <DropdownItem key={column.uid} className="capitalize">
            {capitalize(column.name)}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ColumnsDropdown;
