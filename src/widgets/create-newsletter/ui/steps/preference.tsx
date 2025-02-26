"use client";

import { Input } from "@heroui/react";
import {
  InputSendTime,
  SelectFrequency,
  SelectLanguage,
  useNewsletterFormStore,
} from "@/features/newsletter-form";

interface NewsletterPreferenceProps {}

interface NewsletterPreference {
  key: string;
  label: string;
}

const NewsletterPreference: React.FC<NewsletterPreferenceProps> = () => {
  const { name, setName, description, setDescription } =
    useNewsletterFormStore();

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
      <SelectLanguage />
      <SelectFrequency />
      <InputSendTime />
    </div>
  );
};

export default NewsletterPreference;
