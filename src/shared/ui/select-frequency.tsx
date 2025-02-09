import { Select, SelectItem, type SelectProps } from "@heroui/react";
import { capitalize } from "@/utils/capitalize";

const FREQUENCIES: Frequency[] = ["daily", "weekly", "bi-weekly", "monthly"];

export const SelectFrequency = (
  props: Omit<SelectProps, "children" | "label">,
) => {
  return (
    <Select label="Frequency" {...props}>
      {FREQUENCIES.map((frequency) => (
        <SelectItem key={frequency}>{capitalize(frequency)}</SelectItem>
      ))}
    </Select>
  );
};

export default SelectFrequency;
