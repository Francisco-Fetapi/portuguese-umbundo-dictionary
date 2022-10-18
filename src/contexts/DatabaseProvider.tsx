import React, { createContext, useEffect, useState } from "react";
import { IWord } from "../database/IWord";
import wordsJson from "../database/words.json";

interface IDatabase {
  words: IWord[];
}
interface DatabaseProviderProps {
  children: React.ReactNode;
}

export const DatabaseContext = createContext<Partial<IDatabase>>({});

export default function DatabaseProvider({ children }: DatabaseProviderProps) {
  const [words, setWords] = useState<IWord[]>([]);

  useEffect(() => {
    setWords(wordsJson as IWord[]);
  }, []);

  return (
    <DatabaseContext.Provider value={{ words }}>
      {children}
    </DatabaseContext.Provider>
  );
}
