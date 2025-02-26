"use client";

import { create } from "zustand";

export interface NewsletterForm
  extends Omit<Newsletter.Base, "send_frequency"> {
  send_frequency: string;
  format: string[];
  exampleId: string | null;
  exampleTitle: string | null;
  exampleContent: string | null;
}

interface NewsletterFormActions {
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setFrequency: (frequency: string) => void;
  setTopics: (topics: string[]) => void;
  setSources: (sources: string[]) => void;
  setFormat: (format: string[]) => void;
  setExampleId: (exampleId: string | null) => void;
  setExampleTitle: (exampleTitle: string | null) => void;
  setExampleContent: (exampleContent: string | null) => void;
  setSendTime: (send_time: string) => void;
  setLanguage: (language: NewsletterForm["language"]) => void;
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

    exampleId: null,
    setExampleId: (exampleId) => set({ exampleId }),

    exampleTitle: null,
    setExampleTitle: (exampleTitle) => set({ exampleTitle }),

    exampleContent: null,
    setExampleContent: (exampleContent) => set({ exampleContent }),

    send_time: "",
    setSendTime: (send_time) => set({ send_time }),

    language: null,
    setLanguage: (language) => set({ language }),

    is_active: true,
    custom_prompt: "",
  }),
);
