"use client";

import {
  type ReactNode,
  type SetStateAction,
  createContext,
  useState,
} from "react";

export const SubscriberContext = createContext({
  subscribers: [] as Subscriber[],
  setSubscribers: (_: SetStateAction<Subscriber[]>) => {},
});

interface Props {
  children: ReactNode;
  $subscribers: Subscriber[];
}

export const SubscriberProvider = ({ children, $subscribers }: Props) => {
  const [subscribers, setSubscribers] = useState($subscribers);

  return (
    <SubscriberContext.Provider value={{ subscribers, setSubscribers }}>
      {children}
    </SubscriberContext.Provider>
  );
};
