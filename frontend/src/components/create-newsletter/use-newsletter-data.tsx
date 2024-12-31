"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

interface CreateNewsletterData {
  topics: string[];
  setTopics: React.Dispatch<React.SetStateAction<string[]>>;

  sources: string[];
  setSources: React.Dispatch<React.SetStateAction<string[]>>;

  format: string[];
  setFormat: React.Dispatch<React.SetStateAction<string[]>>;

  sample: string[];
  setSample: React.Dispatch<React.SetStateAction<string[]>>;

  frequency: string;
  setFrequency: React.Dispatch<React.SetStateAction<string>>;
}

const NewsletterDataContext = createContext<CreateNewsletterData | undefined>(
  undefined,
);

export const NewsletterDataProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [topics, setTopics] = useState<string[]>([]);
  const [sources, setSources] = useState<string[]>([]);
  const [format, setFormat] = useState<string[]>([]);
  const [sample, setSample] = useState<string[]>([]);
  const [frequency, setFrequency] = useState<string>("weekly");

  const value: CreateNewsletterData = useMemo(
    () => ({
      topics,
      setTopics,
      sources,
      setSources,
      format,
      setFormat,
      sample,
      setSample,
      frequency,
      setFrequency,
    }),
    [topics, sources, format, frequency],
  );

  return (
    <NewsletterDataContext.Provider value={value}>
      {children}
    </NewsletterDataContext.Provider>
  );
};

export function useNewsletterData() {
  const context = useContext(NewsletterDataContext);
  if (!context) {
    throw new Error(
      "`useNewsletterData` must be used within a `NewsletterDataProvider`",
    );
  }
  return context;
}
