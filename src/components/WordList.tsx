import { CircularProgress, List, Box } from "@mui/material";
import React, { useEffect, useRef, useState, useTransition } from "react";
import { IWord } from "../database/IWord";
import { Text } from "../styles/General";
import WordItem from "./WordItem";

interface WordListProps {
  words: IWord[];
  emptyMessage?: string;
}

export default function WordList({ words, emptyMessage }: WordListProps) {
  const itemsPerPage = 10;
  const [page, setPage] = useState(itemsPerPage);
  const [isPending, startTransition] = useTransition();

  function nextPage() {
    if (!isPending) {
      startTransition(() => {
        setPage(page + itemsPerPage);
      });
    }
  }

  useEffect(() => {
    const container = document.querySelector("#page-header-container");

    container?.addEventListener("scroll", (e) => {
      const somePieceOfWindow = window.innerHeight;
      const percentage =
        ((container.scrollTop + somePieceOfWindow) / container.scrollHeight) *
        100;
      if (percentage >= 99) {
        nextPage();
      }
    });
  });

  const wordsToShow = words.slice(0, page);

  return (
    <div>
      <List>
        {(words?.length || 0) === 0 ? (
          <Text color="gray" align="center">
            {emptyMessage || "De momento não há nada aqui."}
          </Text>
        ) : (
          wordsToShow?.map((word) => (
            <WordItem key={word?.pt} primary={word?.pt} secondary={word?.um} />
          ))
        )}
      </List>
      <Box sx={{ textAlign: "center", my: 2 }}>
        {isPending && <CircularProgress />}
      </Box>
    </div>
  );
}
