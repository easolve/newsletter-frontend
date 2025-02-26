"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Pagination,
  type Selection,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import React from "react";
import { ChevronDownIcon, PlusIcon, SearchIcon } from "@/shared/ui";
import { COLUMNS, STATUS_OPTION } from "../config";
import { renderCell } from "./render-cell";

interface Props {
  records: Newsletter.History[];
}

const HistoryTable = ({ records }: Props) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(searchValue);

  const filteredItems = React.useMemo(() => {
    let filteredRecords = [...records];

    if (hasSearchFilter) {
      filteredRecords = filteredRecords.filter((record) =>
        record.title.toLowerCase().includes(searchValue.toLowerCase()),
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== STATUS_OPTION.length
    ) {
      filteredRecords = filteredRecords.filter((record) =>
        Array.from(statusFilter).includes(record.send_status),
      );
    }

    return filteredRecords;
  }, [records, searchValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    [],
  );

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setSearchValue(value);
      setPage(1);
    } else {
      setSearchValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setSearchValue("");
    setPage(1);
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-end justify-between gap-3">
          <Input
            isClearable
            variant="bordered"
            classNames={{
              base: "w-full md:max-w-[55%] lg:max-w-[44%]",
              inputWrapper: "border-1",
            }}
            placeholder="Search by Title"
            startContent={<SearchIcon />}
            value={searchValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger>
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {STATUS_OPTION.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {status.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

            <Button color="primary" endContent={<PlusIcon />}>
              Generate
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-small text-default-400">
            Total {records.length} records
          </span>
          <label className="flex items-center text-small text-default-400">
            Rows per page:
            <select
              className="bg-transparent text-small text-default-400 outline-none"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    searchValue,
    statusFilter,
    onSearchChange,
    onRowsPerPageChange,
    records.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="flex flex-col items-end px-2 py-2">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
      </div>
    );
  }, [items.length, page, pages, hasSearchFilter]);

  return (
    <Table
      aria-label="Newsletter Records Table"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "min-h-[285px] p-0 shadow-none rounded-none bg-transparent",
      }}
      topContent={topContent}
      topContentPlacement="outside"
    >
      <TableHeader columns={COLUMNS}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No records found"} items={items}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default HistoryTable;
