"use client";

import { Checkbox, CheckboxGroup, Chip, Input } from "@heroui/react";
import { useEffect, useState } from "react";
import { useNewsletterFormStore } from "@/features/newsletter-form";
import { capitalize } from "@/shared/lib";
import { getRecommendedTopics } from "@/widgets/create-newsletter/api/topic";

interface NewsletterTopicProps {}

const NewsletterTopic: React.FC<NewsletterTopicProps> = () => {
  const [inputValue, setInputValue] = useState("");
  const { topics, setTopics } = useNewsletterFormStore();
  const [recommendedTopics, setRecommendedTopics] = useState<string[]>([]);

  useEffect(() => {
    getRecommendedTopics().then((recommended) =>
      setRecommendedTopics(recommended),
    );
  }, []);

  const handleChange = (topic: string[]) => {
    setTopics(topic);
  };

  const handleClose = (topic: string) => {
    setTopics(topics.filter((t) => t !== topic));
  };

  if (recommendedTopics.length === 0) {
    return null;
  }

  return (
    <div className="container flex max-w-7xl flex-grow flex-col gap-4">
      <div className="mb-2 flex gap-2">
        {topics.map((topic, index) => (
          <Chip key={index} variant="flat" onClose={() => handleClose(topic)}>
            {topic}
          </Chip>
        ))}
      </div>
      <CheckboxGroup
        // label="Select topics"
        value={topics}
        onValueChange={handleChange}
      >
        {recommendedTopics.map((topic, index) => (
          <Checkbox key={index} value={topic}>
            {capitalize(topic)}
          </Checkbox>
        ))}
      </CheckboxGroup>
      <Input
        className="max-w-xs"
        label="Custom topic"
        placeholder="Add custom topic"
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.currentTarget.value)
        }
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === "Enter") {
            setTopics([...topics, e.currentTarget.value]);
            setInputValue("");
            e.currentTarget.value = "";
          }
        }}
      />
    </div>
  );
};

export default NewsletterTopic;
