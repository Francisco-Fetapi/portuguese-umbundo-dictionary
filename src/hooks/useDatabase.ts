import { useContext } from "react";
import { DatabaseContext, IDatabase } from "../contexts/DatabaseProvider";
import { IWord } from "../database/IWord";
import {
  IFilterClassOption,
  IFilterExampleOptions,
} from "../pages/AdvancedSearch";
import { ILanguageShort } from "../store/App.selectors";

export default function useDatabase() {
  const database = useContext(DatabaseContext) as IDatabase;

  return {
    database,
    getWord(word: string, from: ILanguageShort = "pt") {
      return database.words?.find((item) => {
        // let word2 = item[from];
        if (from === "pt") {
          return word.trim().toLowerCase() == item[from].trim().toLowerCase();
        } else {
          return item[from].includes(word);
        }
      });
    },
    filterByText(filtered: IWord[], text: string, language?: ILanguageShort) {
      return filtered.filter((word) => {
        let hasInPortuguese = word.pt
          .toLowerCase()
          .includes(text.toLowerCase());
        let hasInUmbundo = word.um.some((w) =>
          w.toLowerCase().includes(text.toLowerCase())
        );
        if (language) {
          if (language === "pt") {
            return hasInPortuguese;
          }
          if (language === "um") {
            return hasInUmbundo;
          }
          return false;
        }

        return hasInPortuguese || hasInUmbundo;
      });
    },
    filterByExamplesQuantity(filtered: IWord[], option: IFilterExampleOptions) {
      return filtered.filter((word) => {
        if (option === "all") return true;
        if (option === "withExample") {
          if (word.examples.length > 0) return true;
        }
        if (option === "withoutExample") {
          if (word.examples.length === 0) return true;
        }
        return false;
      });
    },
    filterByClass(filtered: IWord[], option: IFilterClassOption) {
      return filtered.filter((word) => {
        if (option === "all") return true;
        if (word.class === option) return true;
        return false;
      });
    },
  };
}
