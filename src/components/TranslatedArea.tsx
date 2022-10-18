import { useSelector } from "react-redux";
import { selectSearchResultsMain } from "../store/App.selectors";
import { Text } from "../styles/General";

export default function TranslatedArea() {
  const results = useSelector(selectSearchResultsMain);
  return (
    <div>
      {results.map((word) => (
        <li key={word.pt}>
          {word.pt} - {word.um[0]}
        </li>
      ))}
    </div>
  );
}
