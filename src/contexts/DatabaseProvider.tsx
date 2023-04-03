import React, { createContext, useEffect, useState } from "react";
import { IWord } from "../database/IWord";
import wordsJson from "../database/words.json";
import conversationsJson from "../database/conversations.json";

export interface IDatabase {
  words: IWord[];
  conversations: typeof conversationsJson;
}
export interface DatabaseProviderProps {
  children: React.ReactNode;
}

export const DatabaseContext = createContext<Partial<IDatabase>>({});

export default function DatabaseProvider({ children }: DatabaseProviderProps) {
  const [words, setWords] = useState<IWord[]>([]);
  const [conversations, setConversations] = useState<typeof conversationsJson>(
    []
  );

  useEffect(() => {
    let wordsFormatted = wordsJson.map((word) => {
      let newUmbundoFormated = word.um.split(/[,;]/g);
      newUmbundoFormated = newUmbundoFormated.map((um) => um.trim());

      return { ...word, um: newUmbundoFormated };
    });
    setWords(wordsFormatted as IWord[]);
  }, []);
  useEffect(() => {
    setConversations(conversationsJson);
  }, []);

  return (
    <DatabaseContext.Provider value={{ words, conversations }}>
      {children}
    </DatabaseContext.Provider>
  );
}
