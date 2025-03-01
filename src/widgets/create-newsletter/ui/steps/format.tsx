"use client";

import { InputCustomPrompt } from "@/features/newsletter-form";

interface NewsletterFormatProps {}

const NewsletterFormat: React.FC<NewsletterFormatProps> = () => {
  return (
    <div className="container max-w-7xl flex-grow">
      <InputCustomPrompt />
    </div>
  );
};

export default NewsletterFormat;
