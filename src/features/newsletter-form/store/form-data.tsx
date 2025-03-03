"use client";

import { create } from "zustand";

type NewsletterForm = Newsletter.Base;

interface NewsletterFormActions {
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setFrequency: (frequency: string) => void;
  setTopics: (topics: string[]) => void;
  setSources: (sources: string[]) => void;
  setSendTime: (send_time: string) => void;
  setLanguage: (language: NewsletterForm["language"]) => void;
  setCustomPrompt: (custom_prompt: string) => void;
  getData: () => Newsletter.Base;
  reset: () => void;
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

    send_time: "",
    setSendTime: (send_time) => set({ send_time }),

    language: null,
    setLanguage: (language) => set({ language }),

    is_active: true,

    custom_prompt: "",
    setCustomPrompt: (custom_prompt) => set({ custom_prompt }),

    getData: () => {
      const {
        name,
        description,
        send_frequency,
        topics,
        sources,
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
        send_time,
        language,
        is_active,
        custom_prompt,
      };
    },

    reset: () =>
      set({
        name: "",
        description: "",
        language: null,
        send_frequency: "",
        send_time: "",
        topics: [],
        sources: [],
        custom_prompt: "",
        is_active: true,
      }),
  }),
);
