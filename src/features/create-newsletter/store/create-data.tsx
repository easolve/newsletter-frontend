"use client";

import { type TimeInputProps } from "@heroui/react";
import { create } from "zustand";

type Time = TimeInputProps["value"];

export interface CreateNewsletterState {
  name: string;
  description: string;
  frequency: string;
  topics: string[];
  sources: string[];
  format: string[];
  exampleId: string | null;
  exampleTitle: string | null;
  exampleContent: string | null;
  sendTime: Time;
}

interface CreateNewsletterActions {
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setFrequency: (frequency: string) => void;
  setTopics: (topics: string[]) => void;
  setSources: (sources: string[]) => void;
  setFormat: (format: string[]) => void;
  setExampleId: (exampleId: string | null) => void;
  setExampleTitle: (exampleTitle: string | null) => void;
  setExampleContent: (exampleContent: string | null) => void;
  setSendTime: (sendTime: Time) => void;
}

type CreateNewsletterData = CreateNewsletterState & CreateNewsletterActions;

export const useNewsletterData = create<CreateNewsletterData>((set, get) => ({
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

  sendTime: null,
  setSendTime: (sendTime) => set({ sendTime }),
}));
