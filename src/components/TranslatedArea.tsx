import { useSelector } from "react-redux";
import { IWord } from "../database/IWord";
import { Text } from "../styles/General";

export default function TranslatedArea() {
  const results: IWord[] = [];
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
