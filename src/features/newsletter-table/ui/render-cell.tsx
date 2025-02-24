import { Chip } from "@heroui/react";
import { languages } from "countries-list";
import React from "react";
import { COLOR_MAP } from "@/features/newsletter-table/config";
import { NewsletterStatus, SentStatusChip, UsersIcon } from "@/shared/ui";
import { capitalize } from "@/utils/capitalize";
import ActionsDropdown from "./cell/actions-dropdown";

const transformValue = (info: Newsletter.Info, key: keyof Newsletter.Info) => {
  const value = info[key];

  switch (key) {
    case "created_at":
    case "updated_at":
      return new Date(value as string).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    case "language":
      return languages[info.language].name;
    default:
      return value;
  }
};

export const renderCell = (
  newsletter: Newsletter.Info,
  columnKey: React.Key,
) => {
  switch (columnKey) {
    case "name":
      return (
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{newsletter.name}</div>
          <div>{newsletter.description}</div>
        </div>
      );
    case "send_frequency":
      return (
        <Chip color={COLOR_MAP[newsletter.send_frequency]} variant="bordered">
          {capitalize(newsletter.send_frequency)}
        </Chip>
      );
    case "actions":
      return <ActionsDropdown newsletterId={newsletter.id} />;
    case "is_active":
      return <NewsletterStatus isActive={newsletter.is_active} />;
    case "send_time":
      return (
        <Chip color={COLOR_MAP[newsletter.send_frequency]} variant="bordered">
          {newsletter.send_time}
        </Chip>
      );
    case "subscribers_count":
      return (
        <Chip
          classNames={{
            content: "px-2",
          }}
          variant="bordered"
          startContent={
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-default-100">
              <UsersIcon size={14} className="text-foreground-500" />
            </div>
          }
        >
          {newsletter.subscribers_count}
        </Chip>
      );
    case "last_send_status":
      return <SentStatusChip status={newsletter.last_send_status} />;
    default:
      return (
        <Chip variant="bordered">
          {transformValue(newsletter, columnKey as keyof Newsletter.Info)}
        </Chip>
      );
  }
};
