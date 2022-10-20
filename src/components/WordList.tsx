import { List } from "@mui/material";
import React from "react";
import { IWord } from "../database/IWord";
import { Text } from "../styles/General";
import WordItem from "./WordItem";

interface WordListProps {
  words: IWord[];
  emptyMessage?: string;
}

export default function WordList({ words, emptyMessage }: WordListProps) {
  return (
    <div>
      <List>
        {words.length === 0 ? (
          <Text color="gray" align="center">
            {emptyMessage || "De momento não há nada aqui."}
          </Text>
        ) : (
          words?.map((word) => (
            <WordItem key={word.pt} primary={word.pt} secondary={word.um} />
          ))
        )}
      </List>
    </div>
  );
}
