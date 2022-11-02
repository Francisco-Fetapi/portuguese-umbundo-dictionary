import { ILanguageShort } from "../store/App.selectors";
import useDatabase from "./useDatabase";

interface IWordsTranslated {
  [key: string]: string;
}

export default function useTraductor() {
  const { database, getWord } = useDatabase();
  return {
    translate(text: string, from: ILanguageShort, to: ILanguageShort) {
      let words = text.trim().split(/[^á-úa-z]+/gi);
      words = words.filter((word) => word.length > 0);

      let wordsTranslated: IWordsTranslated = {};
      words.forEach((word, key) => {
        let findedWord = getWord(word, from);
        if (!findedWord) {
          wordsTranslated[word] = "_".repeat(word.length);
        } else {
          if (to === "um") {
            wordsTranslated[word] = findedWord[to][0];
          } else {
            wordsTranslated[word] = findedWord[to];
          }
        }
      });
      return wordsTranslated;
    },
  };
}
