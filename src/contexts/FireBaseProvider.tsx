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
import { IConversation } from "../database/IConversation";

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default function FireBaseProvider({ children }: DatabaseProviderProps) {
  const [words, setWords] = useState<IWord[]>([]);
  const [conversations, setConversations] = useState<IConversation[]>([]);
  const [fWords, fwordsLoading, fwordsError] = useCollection(
    collection(db, "words"),
    {}
  );
  const [fConversations, fConversationsLoading, fConversationsError] =
    useCollection(collection(db, "conversations"), {});

  useEffect(() => {
    if (!fwordsLoading && fWords) {
      const newWords = fWords.docs.map((doc) => {
        let um = doc.data().um as string;
        let newUmbundoFormated = um.split(/[,;]/g);
        newUmbundoFormated = newUmbundoFormated.map((um) => um.trim());

        return { ...doc.data(), um: newUmbundoFormated };
      });
      console.log(newWords);
      setWords(newWords as IWord[]);
    }
  }, [fWords]);

  useEffect(() => {
    if (!fConversationsLoading && fConversations) {
      const newConversations = fConversations.docs.map((doc) => {
        // return {...doc.data()} as IConversation;
        return { ...doc.data() };
      });

      setConversations(newConversations as IConversation[]);
    }
  }, [fConversations]);

  return (
    <DatabaseContext.Provider value={{ words, conversations }}>
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
