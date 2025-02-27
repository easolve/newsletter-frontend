"use client";

import { Input } from "@heroui/react";
import {
  InputSendTime,
  SelectFrequency,
  SelectLanguage,
  useNewsletterFormStore,
} from "@/features/newsletter-form";

const NewsletterPreference = () => {
  const { name, setName, description, setDescription } =
    useNewsletterFormStore();

  return (
    <div className="flex max-w-7xl flex-grow flex-col gap-4">
      <Input
        label="Name"
        placeholder="Enter name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Description"
        placeholder="Enter description"
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
