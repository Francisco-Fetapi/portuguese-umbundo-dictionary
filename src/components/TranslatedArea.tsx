import { List } from "@mui/material";
import { useSelector } from "react-redux";
import {
  selectSearchResults,
  selectTextToTranslate,
} from "../store/App.selectors";
import { Text } from "../styles/General";
import WordItem from "./WordItem";

export default function TranslatedArea() {
  const results = useSelector(selectSearchResults);
  const textToTranslate = useSelector(selectTextToTranslate);
  return (
    <List>
      {results.map((word) => (
        <WordItem key={word.pt} primary={word.pt} secondary={word.um} />
      ))}
      {results.length === 0 && textToTranslate.length > 0 && (
        <Text color="gray" align="center">
          Nenhum resultado encontrado
        </Text>
      )}
    </List>
  );
}
