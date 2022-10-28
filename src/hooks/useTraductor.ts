import { ILanguageShort } from "../store/App.selectors";
import useDatabase from "./useDatabase";

export default function useTraductor() {
  const { database, filterByText } = useDatabase();
  return {
    translate(text: string, from: ILanguageShort, to: ILanguageShort) {
      let words = text.trim().split(" ");
      words = words.map((word) => word.trim());
      words = words.filter((word) => word.length > 0);

      let wordsTranslated = words.map((word, key) => {
        let findedWords = filterByText(database.words, word, from);
        if (findedWords.length === 0) {
          return "_".repeat(word.length);
        }
        let firstFinded = findedWords[0][to].toString();
        if (key === 0) {
          // first letter must be `uppercased`
          firstFinded = firstFinded[0].toUpperCase() + firstFinded.substring(1);
        } else {
          firstFinded = firstFinded.toLowerCase();
        }
        return firstFinded;
      });
      return wordsTranslated;
    },
  };
}
