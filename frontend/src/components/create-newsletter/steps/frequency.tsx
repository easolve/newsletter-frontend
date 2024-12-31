"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { SharedSelection } from "@nextui-org/system";
import { useNewsletterData } from "../use-newsletter-data";

interface NewsletterFrequencyProps {}

interface NewsletterFrequency {
  key: string;
  label: string;
}

const frequencies: NewsletterFrequency[] = [
  {
    key: "daily",
    label: "Daily",
  },
  {
    key: "weekly",
    label: "Weekly",
  },
  {
    key: "bi-weekly",
    label: "Bi-weekly",
  },
  {
    key: "monthly",
    label: "Monthly",
  },
];

const NewsletterFrequency: React.FC<NewsletterFrequencyProps> = () => {
  const { frequency, setFrequency } = useNewsletterData();

  const handleChange = (keys: SharedSelection) => {
    const frequency = Array.from(keys)[0] as string;
    setFrequency(frequency);
  };
  return (
    <div className="container mx-auto max-w-7xl flex-grow px-6">
      <Select
        className="max-w-xs"
        label="Newsletter frequency"
        placeholder="Select frequency"
        defaultSelectedKeys={[frequency]}
        onSelectionChange={handleChange}
      >
        {frequencies.map((frequency) => (
          <SelectItem key={frequency.key}>{frequency.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default NewsletterFrequency;
