import { Select, SelectItem, type SelectProps } from "@heroui/react";
import { type ChangeEvent } from "react";
import { useNewsletterFormStore } from "@/features/newsletter-form";
import { capitalize } from "@/utils/capitalize";

const FREQUENCIES: Frequency[] = ["daily", "weekly", "bi-weekly", "monthly"];

type Props = Pick<SelectProps, "className">;

export const SelectFrequency = (props: Props) => {
  const frequency = useNewsletterFormStore((state) => state.send_frequency);
  const setFrequency = useNewsletterFormStore((state) => state.setFrequency);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFrequency(value);
  };

  return (
    <Select
      {...props}
      label="Frequency"
      placeholder="Select frequency"
      selectedKeys={[frequency]}
      onChange={handleChange}
    >
      {FREQUENCIES.map((frequency) => (
        <SelectItem key={frequency}>{capitalize(frequency)}</SelectItem>
      ))}
    </Select>
  );
};
