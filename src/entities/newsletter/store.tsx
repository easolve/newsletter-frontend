"use client";

import { useEffect } from "react";
import { create } from "zustand/react";

interface NewsletterState {
  id: Newsletter.Info["id"];
}

interface NewsletterAction {
  setId: (newsletterId: Newsletter.Info["id"]) => void;
}

type NewsletterStore = NewsletterState & NewsletterAction;

export const useNewsletterStore = create<NewsletterStore>((set) => ({
  id: "",
  setId: (id) => set({ id }),
}));

interface Props {
  children: React.ReactNode;
  id: Newsletter.Info["id"];
}

export const NewsletterProvider = ({ children, id }: Props) => {
  const { setId } = useNewsletterStore.getState();

  useEffect(() => {
    setId(id);
  }, []);

  return <>{children}</>;
};
