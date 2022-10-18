import { useContext } from "react";
import { DatabaseContext } from "../contexts/DatabaseProvider";
import { IWord } from "../database/IWord";
import { IFilterClassOption, IFilterExampleOptions } from "../pages/Dictionary";

export default function useDatabase() {
  const database = useContext(DatabaseContext);

  return {
    database,
    filterByText(filtered: IWord[], text: string) {
      return filtered.filter((word) => {
        let hasInPortuguese = word.pt
          .toLowerCase()
          .includes(text.toLowerCase());
        let hasInUmbundo = word.um.some((w) =>
          w.toLowerCase().includes(text.toLowerCase())
        );
        if (hasInPortuguese || hasInUmbundo) {
          return true;
        }
        return false;
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
