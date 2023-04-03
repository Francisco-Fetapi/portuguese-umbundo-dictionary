import { List } from "@mui/material";
import { useSelector } from "react-redux";
import {
  selectSearchResults,
  selectTextToTranslate,
} from "../store/App.selectors";
import { Text } from "../styles/General";
import WordItem from "./WordItem";
import WordList from "./WordList";

export default function TranslatedArea() {
  const results = useSelector(selectSearchResults);
  const textToTranslate = useSelector(selectTextToTranslate);
  if (!textToTranslate) {
    return <div />;
  }

  return (
    <WordList
      words={results}
      emptyMessage="Nenhum resultado encontrado"
      containerId="#header-container"
    />
  );
}
