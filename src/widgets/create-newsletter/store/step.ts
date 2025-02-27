import { create } from "zustand";

interface State {
  step: number;
}

interface Action {
  goPrev: () => void;
  goNext: () => void;
}

type Store = State & Action;

export const useStepStore = create<Store>((set) => ({
  step: 0,
  goPrev: () => set((state) => ({ step: state.step - 1 })),
  goNext: () => set((state) => ({ step: state.step + 1 })),
}));
