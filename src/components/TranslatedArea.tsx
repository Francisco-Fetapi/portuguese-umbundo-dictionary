import { useSelector } from "react-redux";
import { selectSearchResults } from "../store/App.selectors";
import WordList from "./WordList";

export default function TranslatedArea() {
  const results = useSelector(selectSearchResults);

  return (
    <WordList
      words={results}
      emptyMessage="Nenhum resultado encontrado"
      containerId="#header-container"
    />
  );
}
