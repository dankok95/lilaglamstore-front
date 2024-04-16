import React, { useEffect, useMemo, useState } from "react";
import { TTrolley } from "../types/trolley";
import useLocalStorage from "../hooks/localStorage";

const TrolleyContext = React.createContext<{
  trolley: TTrolley | null;
  setTrolley: React.Dispatch<React.SetStateAction<TTrolley | null>>;
}>({
  trolley: null,
  setTrolley: () => {},
});

export const useTrolleyContext = () => {
  const context = React.useContext(TrolleyContext);
  return context;
};

interface Props {
  children: React.ReactNode;
}

export const TrolleyProvider = ({ children }: Props) => {
  const [trolley, setTrolley] = useState<TTrolley | null>(null);
  const [trolleyStorage, setTrolleyStorage] = useLocalStorage("trolley", "");

  useEffect(() => {
    if (trolleyStorage) {
      setTrolley(trolleyStorage);
    }
  }, [trolleyStorage]);

  useEffect(() => {
    if (trolley) {
      setTrolleyStorage(trolley);
    }
  }, [trolley, setTrolleyStorage]);

  const value = useMemo(() => {
    return { trolley, setTrolley };
  }, [trolley, setTrolley]);
  return (
    <TrolleyContext.Provider value={value}>{children}</TrolleyContext.Provider>
  );
};
