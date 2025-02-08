import { Chip, type ChipProps } from "@heroui/react";
import { capitalize } from "@/utils/capitalize";

const statusColorMap = {
  daily: "warning",
  weekly: "success",
  "bi-weekly": "secondary",
  monthly: "primary",
} satisfies Record<Frequency, ChipProps["color"]>;

interface Props {
  frequency: Frequency;
}

const Frequency = ({ frequency }: Props) => {
  return (
    <Chip
      className="capitalize"
      color={statusColorMap[frequency]}
      size="md"
      variant="flat"
    >
      {capitalize(frequency)}
    </Chip>
  );
};

export default Frequency;
