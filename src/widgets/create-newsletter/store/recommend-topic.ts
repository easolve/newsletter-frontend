import { create } from "zustand/react";

type State = {
  recommendedTopics: string[];
};

type Actions = {
  setRecommendedTopics: (recommendedTopics: string[]) => void;
};

type Store = State & Actions;

export const useRecommendedTopicsStore = create<Store>((set) => ({
  recommendedTopics: [],
  setRecommendedTopics: (recommendedTopics) => set({ recommendedTopics }),
}));
