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
  regenerate: () => void;
  reset: () => void;

  setId: (id: string | null) => void;
  setExample: (example: Example) => void;
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
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
    title: null,
    content: null,
  }),
  regenerate: () => set({ id: null, title: null, content: null }),
  reset: () =>
    set({
      language: null,
      topics: [],
      sources: [],
      custom_prompt: "",
      id: null,
      title: null,
      content: null,
    }),

  id: null,
  title: null,
  content: null,
  setId: (id) => set({ id }),
  setExample: ({ title, content }) => set({ title, content }),
  setTitle: (title) => set({ title }),
  setContent: (content) => set({ content }),
}));
