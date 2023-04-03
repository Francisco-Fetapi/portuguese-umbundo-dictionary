import { CircularProgress, List, Box } from "@mui/material";
import React, { useEffect, useRef, useState, useTransition } from "react";
import { IWord } from "../database/IWord";
import { Text } from "../styles/General";
import WordItem from "./WordItem";

interface WordListProps {
  words: IWord[];
  emptyMessage?: string;
  containerId?: string;
}

export default function WordList({
  words,
  emptyMessage,
  containerId = "#page-header-container",
}: WordListProps) {
  const itemsPerPage = 20;
  const [page, setPage] = useState(itemsPerPage);
  const [isPending, startTransition] = useTransition();
  const isPageFinished = page >= words.length;

  function nextPage() {
    console.log(page, words.length);
    if (isPageFinished) {
      return;
    }

    if (!isPending) {
      startTransition(() => {
        setPage(page + itemsPerPage);
      });
    }
  }
  const wordsToShow = words.slice(0, page);

  useEffect(() => {
    const container = document.querySelector(containerId) as HTMLDivElement;

    if (container) {
      container.onscroll = () => {
        const somePieceOfWindow = window.innerHeight;
        const percentage =
          ((container.scrollTop + somePieceOfWindow) / container.scrollHeight) *
          100;
        if (percentage >= 99) {
          nextPage();
        }
      };
    }
  });

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
    </div>
  );
}
