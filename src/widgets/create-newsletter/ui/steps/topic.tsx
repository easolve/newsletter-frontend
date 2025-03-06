"use client";

import { Chip, Input } from "@heroui/react";
import { useState } from "react";
import { useNewsletterFormStore } from "@/features/newsletter-form";
import TopicCheckbox from "./topic-checkbox";

interface NewsletterTopicProps {}

const NewsletterTopic: React.FC<NewsletterTopicProps> = () => {
  const [inputValue, setInputValue] = useState("");
  const { topics, addTopic, deleteTopic } = useNewsletterFormStore();

  return (
    <div className="container flex max-w-7xl flex-grow flex-col gap-4">
      <div className="mb-2 flex gap-2">
        {topics.map((topic, index) => (
          <Chip key={index} variant="flat" onClose={() => deleteTopic(topic)}>
            {topic}
          </Chip>
        ))}
      </div>
      <TopicCheckbox />
      <Input
        className="max-w-xs"
        label="Custom topic"
        placeholder="Add custom topic"
        value={inputValue}
        onValueChange={setInputValue}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            addTopic(e.currentTarget.value);
            setInputValue("");
            e.currentTarget.value = "";
          }
        }}
      />
    </div>
  );
};

export default NewsletterTopic;
