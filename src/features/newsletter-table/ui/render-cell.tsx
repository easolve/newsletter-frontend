import React from "react";
import ActionsDropdown from "./cell/actions-dropdown";
import FrequencyChip from "./cell/frequency-chip";

export const renderCell = (
  newsletter: Newsletter.Info,
  columnKey: React.Key,
) => {
  const cellValue = newsletter[columnKey as keyof Newsletter.Info];

  switch (columnKey) {
    case "name":
      return (
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{newsletter.name}</div>
          <div>{newsletter.description}</div>
        </div>
      );
    case "send_frequency":
      return <FrequencyChip frequency={newsletter.send_frequency} />;
    case "actions":
      return <ActionsDropdown newsletterId={newsletter.id} />;
    default:
      return cellValue;
  }
};
