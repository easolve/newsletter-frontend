import {
  Select,
  SelectItem,
  type SelectProps,
  type SharedSelection,
} from "@heroui/react";
import { useCallback, useMemo, useState } from "react";
import { useNewsletterFormStore } from "@/features/newsletter-form";
import { capitalize } from "@/utils/capitalize";

const FREQUENCIES: Frequency[] = ["daily", "weekly", "bi-weekly", "monthly"];

interface Props extends Pick<SelectProps, "className"> {
  initialValue?: Frequency;
}

export const SelectFrequency = ({ initialValue, ...props }: Props) => {
  const initialSelection = useMemo(() => {
    if (initialValue) {
      return new Set([initialValue]);
    }
    return new Set([]);
  }, []);
  const [value, setValue] = useState<SharedSelection>(initialSelection);

  const handleChange = useCallback((keys: SharedSelection) => {
    const frequency = Array.from(keys)[0] || "";
    useNewsletterFormStore.getState().setFrequency(frequency as string);
    setValue(keys);
  }, []);

  return (
    <Select
      {...props}
      label="Frequency"
      placeholder="Select frequency"
      selectedKeys={value}
      onSelectionChange={handleChange}
    >
      {FREQUENCIES.map((frequency) => (
        <SelectItem key={frequency}>{capitalize(frequency)}</SelectItem>
      ))}
    </Select>
  );
};
