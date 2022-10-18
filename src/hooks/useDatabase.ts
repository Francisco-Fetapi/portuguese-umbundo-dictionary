import { useContext } from "react";
import { DatabaseContext } from "../contexts/DatabaseProvider";
import { IWordClasses } from "../database/IWordClasses";
import { IFilterExampleOptions } from "../pages/Dictionary";

export default function useDatabase() {
  const database = useContext(DatabaseContext);

  console.log(database);

  return {
    database,
    filterByText(text: string) {
      return database.words?.filter((word) => {
        if (word.pt.includes(text) || word.um.includes(text)) {
          return true;
        }
        return false;
      });
    },
    filterByExamplesQuantity(option: IFilterExampleOptions) {
      return database.words?.filter((word) => {
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
    filterByClass(option: keyof IWordClasses) {
      return database.words?.filter((word) => {
        if (word.class === option) return true;
        return false;
      });
    },
  };
}
