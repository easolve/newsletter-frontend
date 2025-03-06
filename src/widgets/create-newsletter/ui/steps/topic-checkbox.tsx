"use client";

import { Checkbox, CheckboxGroup, Skeleton } from "@heroui/react";
import { Children, useEffect } from "react";
import { useNewsletterFormStore } from "@/features/newsletter-form";
import { capitalize } from "@/shared/lib";
import { getRecommendedTopics } from "../../api/topic";
import { useRecommendedTopicsStore } from "../../store/recommend-topic";

interface Props {
  children: React.ReactNode;
}

const CheckboxSkeleton = ({ children }: Props) => {
  return (
    <div className="w-40 space-y-3">
      {Children.map(children, (child) => (
        <span className="flex">
          <Checkbox />
          {child}
        </span>
      ))}
    </div>
  );
};

const TopicCheckbox = () => {
  const { topics, setTopics } = useNewsletterFormStore();
  const { recommendedTopics, setRecommendedTopics } =
    useRecommendedTopicsStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      getRecommendedTopics().then((recommended) =>
        setRecommendedTopics(recommended),
      );
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  if (recommendedTopics.length === 0) {
    return (
      <CheckboxSkeleton>
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300" />
        </Skeleton>
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200" />
        </Skeleton>
      </CheckboxSkeleton>
    );
  }

  return (
    <CheckboxGroup
      // label="Select topics"
      value={topics}
      onValueChange={setTopics}
    >
      {recommendedTopics.map((topic, index) => (
        <Checkbox key={index} value={topic}>
          {capitalize(topic)}
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
};

export default TopicCheckbox;
