"use client";

import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
  useState,
} from "react";

type Records = Newsletter.History[] | null;

interface HistoryContext {
  records: Records;
  setRecords: Dispatch<SetStateAction<Records>>;
}

export const historyContext = createContext<HistoryContext>({
  records: null,
  setRecords: () => {},
});

interface Props {
  children: ReactNode;
  history: Records;
}

export const HistoryProvider = ({ children, history }: Props) => {
  const [records, setRecords] = useState(history);

  return (
    <historyContext.Provider
      value={{
        records,
        setRecords,
      }}
    >
      {children}
    </historyContext.Provider>
  );
};
