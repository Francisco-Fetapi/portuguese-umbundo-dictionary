import { ILanguageShort } from "../store/App.selectors";
import useDatabase from "./useDatabase";

interface IWordsTranslated {
  [key: string]: string;
}

export default function useTraductor() {
  const { database, filterByText } = useDatabase();
  return {
    translate(text: string, from: ILanguageShort, to: ILanguageShort) {
      let words = text.trim().split(/\W+/g);
      //   words = words.map((word) => word.replace(/\W+/, ""));
      words = words.filter((word) => word.length > 0);
      //   let words = text.split(/\W+/g);

      let wordsTranslated: IWordsTranslated = {};
      words.forEach((word, key) => {
        let findedWords = filterByText(database.words, word, from);
        if (findedWords.length === 0) {
          wordsTranslated[word] = "_".repeat(word.length);
        } else {
          let firstFinded = findedWords[0];
          if (to === "um") {
            wordsTranslated[word] = firstFinded[to][0];
          } else {
            wordsTranslated[word] = firstFinded[to];
          }
        }
      });
      return wordsTranslated;
    },
  };
}
