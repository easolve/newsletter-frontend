"use client";

import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { useNewsletterData } from "../use-newsletter-data";

interface NewsletterSourceProps {}

const NewsletterSource: React.FC<NewsletterSourceProps> = () => {
  const { sources, setSources } = useNewsletterData();

  const handleChange = (source: string[]) => {
    setSources(source);
  };

  return (
    <div className="container mx-auto flex max-w-7xl flex-grow flex-col px-6">
      <CheckboxGroup
        label="Select sources"
        value={sources}
        onValueChange={handleChange}
      >
        <Checkbox value="bbc-news">BBC News</Checkbox>
        <Checkbox value="linkedin-news">LinkedIn News</Checkbox>
        <Checkbox value="abc-news">ABC News</Checkbox>
        <Checkbox value="cnn">CNN</Checkbox>
        <Checkbox value="bloomberg">Bloomberg</Checkbox>
      </CheckboxGroup>
    </div>
  );
};

export default NewsletterSource;
