"use client";

import { create } from "zustand";

interface CreateNewsletterData {
  name: string;
  setName: (name: string) => void;

  description: string;
  setDescription: (description: string) => void;

  frequency: string;
  setFrequency: (frequency: string) => void;

  topics: string[];
  setTopics: (topics: string[]) => void;

  sources: string[];
  setSources: (sources: string[]) => void;

  format: string[];
  setFormat: (format: string[]) => void;

  exampleId: string | null;
  setExampleId: (exampleId: string | null) => void;

  exampleTitle: string | null;
  setExampleTitle: (exampleTitle: string | null) => void;

  exampleContent: string | null;
  setExampleContent: (exampleContent: string | null) => void;
}

export const useNewsletterData = create<CreateNewsletterData>((set) => ({
  name: "",
  setName: (name) => set({ name }),

  description: "",
  setDescription: (description) => set({ description }),

  frequency: "weekly",
  setFrequency: (frequency) => set({ frequency }),

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
}));
