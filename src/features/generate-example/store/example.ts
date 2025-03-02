import { create } from "zustand";

type Example = {
  title: string | null;
  content: string | null;
};

type State = Newsletter.ExampleData &
  Example & {
    id: string | null;
  };

interface Action {
  save: (metadata: Newsletter.ExampleData) => void;

  setId: (id: string | null) => void;
  setExample: (example: Example) => void;
}

type Store = State & Action;

export const useExampleStore = create<Store>((set) => ({
  language: null,
  topics: [],
  sources: [],
  custom_prompt: "",
  save: ({ language, topics, sources, custom_prompt }) => ({
    language,
    topics,
    sources,
    custom_prompt,
    id: null,
    title: null,
    content: null,
  }),

  id: null,
  title: null,
  content: null,
  setId: (id) => set({ id }),
  setExample: ({ title, content }) => set({ title, content }),
}));
