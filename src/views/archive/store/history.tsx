"use client";

import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
  useState,
} from "react";
import { fetchHistory } from "../api/history";

type Records = Newsletter.History[] | null;

interface HistoryContext {
  records: Records;
  setRecords: Dispatch<SetStateAction<Records>>;
  reload: () => void;
}

export const historyContext = createContext<HistoryContext>({
  records: null,
  setRecords: () => {},
  reload: () => {},
});

interface Props {
  children: ReactNode;
  history: Records;
  id: Newsletter.Info["id"];
}

export const HistoryProvider = ({ children, history, id }: Props) => {
  const [records, setRecords] = useState(history);

  const reload = async () => {
    setRecords(null);
    fetchHistory(id).then((res) => setRecords(res));
  };

  return (
    <historyContext.Provider
      value={{
        records,
        setRecords,
        reload,
      }}
    >
      {children}
    </historyContext.Provider>
  );
};
