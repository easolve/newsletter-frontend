import { create } from "zustand/react";

interface State {
  list: string[];
}

interface Actions {
  addToList: (email: string) => void;
  removeFromList: (email: string) => void;
  clear: () => void;
}

type Store = State & Actions;

export const useAddSubscriberStore = create<Store>((set) => ({
  list: [],
  addToList: (email) => set((state) => ({ list: [...state.list, email] })),
  removeFromList: (email) =>
    set((state) => ({ list: state.list.filter((item) => item !== email) })),
  clear: () => set({ list: [] }),
}));
