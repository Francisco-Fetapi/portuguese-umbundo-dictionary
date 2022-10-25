import React, { createContext, useEffect, useState } from "react";
import { IWord } from "../database/IWord";

import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

import firebaseConfig from "../firebase.json";
import {
  Backdrop,
  CircularProgress,
  LinearProgress,
  Stack,
} from "@mui/material";
import { DatabaseContext, DatabaseProviderProps } from "./DatabaseProvider";
import { Text } from "../styles/General";

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
      const newWords = fWords.docs.map((doc) => {
        let um = doc.data().um as string;
        let newUmbundoFormated = um.split(",");
        newUmbundoFormated = newUmbundoFormated.map((um) => um.trim());

        return { ...doc.data(), um: newUmbundoFormated };
      });
      console.log(newWords);
      setWords(newWords as IWord[]);
      console.log("Buscou palavras do firebase");
    }
  }, [fWords]);

  console.log(words);

  return (
    <DatabaseContext.Provider value={{ words }}>
      {fwordsLoading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={fwordsLoading}
        >
          {/* <LinearProgress color="primary" variant="indeterminate" /> */}
          <Stack justifyContent="center" alignItems="center">
            <CircularProgress />
            <br />
            <Text align="center" variant="subtitle2" color="gray">
              Carregando dados. Aguarde um momento
            </Text>
          </Stack>
        </Backdrop>
      )}
      {children}
    </DatabaseContext.Provider>
  );
}
