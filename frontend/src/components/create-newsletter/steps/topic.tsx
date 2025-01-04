"use client";

import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { useNewsletterData } from "../use-newsletter-data";

interface NewsletterTopicProps {}

const NewsletterTopic: React.FC<NewsletterTopicProps> = () => {
  const { topics, setTopics } = useNewsletterData();

  const handleChange = (topic: string[]) => {
    setTopics(topic);
  };

  return (
    <div className="container mx-auto flex max-w-7xl flex-grow flex-col">
      <CheckboxGroup
        // label="Select topics"
        value={topics}
        onValueChange={handleChange}
      >
        <Checkbox value="economy">💰 Economy</Checkbox>
        <Checkbox value="science">🔬 Science</Checkbox>
        <Checkbox value="health">🏥 Health</Checkbox>
        <Checkbox value="environment">🌍 Environment</Checkbox>
        <Checkbox value="celebrity">📺 Celebrity</Checkbox>
      </CheckboxGroup>
    </div>
  );
};

export default NewsletterTopic;
