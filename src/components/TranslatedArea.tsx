import { useSelector } from "react-redux";
import { selectTextTranslated } from "../store/App.selectors";
import { Text } from "../styles/General";

export default function TranslatedArea() {
  const textTranslated = useSelector(selectTextTranslated);
  return (
    <div>
      <Text align="center">{textTranslated}</Text>
    </div>
  );
}
