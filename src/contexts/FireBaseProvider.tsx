import React, { createContext, useEffect, useState } from "react";
import { IWord } from "../database/IWord";

import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

import firebaseConfig from "../firebase.json";
import { Backdrop, LinearProgress } from "@mui/material";
import { DatabaseContext, DatabaseProviderProps } from "./DatabaseProvider";

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default function FireBaseProvider({ children }: DatabaseProviderProps) {
  const [words, setWords] = useState<IWord[]>([]);
  const [fWords, fwordsLoading, fwordsError] = useCollection(
    collection(db, "words"),
    {}
  );

  useEffect(() => {
    console.log("palavras do firebase mudou");
    if (!fwordsLoading && fWords) {
      const newWords = fWords.docs.map((doc) => doc.data());
      console.log(newWords);
      setWords(newWords as IWord[]);
      console.log("Buscou palavras do firebase");
    }
  }, [fWords]);

  console.log(words);

  return (
    <DatabaseContext.Provider value={{ words }}>
      {true && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <LinearProgress color="secondary" />
        </Backdrop>
      )}
      {children}
    </DatabaseContext.Provider>
  );
}
