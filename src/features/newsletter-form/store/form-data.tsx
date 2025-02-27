"use client";

import { create } from "zustand";

interface NewsletterForm extends Newsletter.Base {
  format: string[];
}

interface NewsletterFormActions {
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setFrequency: (frequency: string) => void;
  setTopics: (topics: string[]) => void;
  setSources: (sources: string[]) => void;
  setFormat: (format: string[]) => void;
  setSendTime: (send_time: string) => void;
  setLanguage: (language: NewsletterForm["language"]) => void;
  getData: () => Newsletter.Base;
}

type NewsletterFormStore = NewsletterForm & NewsletterFormActions;

export const useNewsletterFormStore = create<NewsletterFormStore>(
  (set, get) => ({
    name: "",
    setName: (name) => set({ name }),

    description: "",
    setDescription: (description) => set({ description }),

    send_frequency: "",
    setFrequency: (send_frequency) => set({ send_frequency }),

    topics: [],
    setTopics: (topics) => set({ topics }),

    sources: [],
    setSources: (sources) => set({ sources }),

    format: [],
    setFormat: (format) => set({ format }),

    send_time: "",
    setSendTime: (send_time) => set({ send_time }),

    language: null,
    setLanguage: (language) => set({ language }),

    is_active: true,
    custom_prompt: "",

    getData: () => {
      const {
        name,
        description,
        send_frequency,
        topics,
        sources,
        format,
        send_time,
        language,
        is_active,
        custom_prompt,
      } = get();
      return {
        name,
        description,
        send_frequency,
        topics,
        sources,
        format,
        send_time,
        language,
        is_active,
        custom_prompt,
      };
    },
  }),
);
