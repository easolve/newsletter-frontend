"use client";

import { Input, SharedSelection } from "@heroui/react";
import SelectFrequency from "@/shared/ui/select-frequency";
import { useNewsletterData } from "../store/create-data";

interface NewsletterPreferenceProps {}

interface NewsletterPreference {
  key: string;
  label: string;
}

const NewsletterPreference: React.FC<NewsletterPreferenceProps> = () => {
  const {
    frequency,
    setFrequency,
    name,
    setName,
    description,
    setDescription,
  } = useNewsletterData();

  const handleChange = (keys: SharedSelection) => {
    const frequency = Array.from(keys)[0] as string;
    setFrequency(frequency);
  };
  return (
    <div className="flex max-w-7xl flex-grow flex-col gap-4">
      <Input
        className="max-w-xs"
        label="Name"
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        className="max-w-xs"
        label="Description"
        placeholder="Description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <SelectFrequency
        className="max-w-xs"
        placeholder="Select frequency"
        defaultSelectedKeys={[frequency]}
        onSelectionChange={handleChange}
      />
    </div>
  );
};

export default NewsletterPreference;
