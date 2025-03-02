"use client";

import { useEffect } from "react";
import { create } from "zustand/react";

type NewsletterState = {
  id: Newsletter.Info["id"];
} & Newsletter.ExampleData;

interface NewsletterAction {
  setId: (newsletterId: Newsletter.Info["id"]) => void;
  setExampleData: (example: Newsletter.ExampleData) => void;
}

type NewsletterStore = NewsletterState & NewsletterAction;

export const useNewsletterStore = create<NewsletterStore>((set) => ({
  id: "",
  setId: (id) => set({ id }),

  topics: [],
  sources: [],
  language: null,
  custom_prompt: "",
  setExampleData: ({ topics, sources, language, custom_prompt }) =>
    set({ topics, sources, language, custom_prompt }),
}));

interface Props {
  children: React.ReactNode;
  info: Newsletter.Info;
}

export const NewsletterProvider = ({ children, info }: Props) => {
  const { setId, setExampleData } = useNewsletterStore.getState();

  useEffect(() => {
    setId(info.id);
    setExampleData(info);
  }, []);

  return <>{children}</>;
};
