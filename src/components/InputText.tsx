import { useDebouncedValue, useInputState } from "@mantine/hooks";
import { Box, useTheme } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDatabase from "../hooks/useDatabase";
import {
  selectSettings,
  selectShortLanguageChoosed,
  selectTextToTranslate,
} from "../store/App.selectors";
import { setSearchResults, setTextToTranslate } from "../store/App.store";
import { InputArea } from "../styles/General";

type FuncFormEventHandler = React.FormEventHandler<HTMLFormElement> | undefined;

export default function InputText() {
  const { automaticSearch } = useSelector(selectSettings);
  const textToTranslate = useSelector(selectTextToTranslate);
  const [value, handleChange] = useInputState(textToTranslate);
  const [debounced] = useDebouncedValue(value, 700);
  const dispatch = useDispatch();
  const theme = useTheme();
  const { database, filterByText } = useDatabase();
  const languagesOrder = useSelector(selectShortLanguageChoosed);

  useEffect(() => {
    if (automaticSearch) {
      dispatch(setTextToTranslate(value));
      console.log("changed");
    }
  }, [debounced]);

  useEffect(() => {
    if (database.words) {
      const results = filterByText(
        database.words,
        textToTranslate,
        languagesOrder[0]
      );
      dispatch(setSearchResults(results));
    }
  }, [textToTranslate]);

  const handleSearch: FuncFormEventHandler = (e) => {
    e.preventDefault();
    dispatch(setTextToTranslate(value));
  };

  console.log(textToTranslate);

  return (
    <InputArea>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSearch}
      >
        <input
          value={value}
          onChange={handleChange}
          placeholder="Introduza a palavra"
          className={theme.palette.mode}
        />
      </Box>
    </InputArea>
  );
}
