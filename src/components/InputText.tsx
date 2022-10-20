import { useDebouncedValue, useInputState } from "@mantine/hooks";
import { Box, useTheme } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDatabase from "../hooks/useDatabase";
import { selectSettings, selectTextToTranslate } from "../store/App.selectors";
import { setSearchResults, setTextToTranslate } from "../store/App.store";
import { InputArea } from "../styles/General";

type FuncFormEventHandler = React.FormEventHandler<HTMLFormElement> | undefined;

export default function InputText() {
  const [value, handleChange] = useInputState("");
  const [debounced] = useDebouncedValue(value, 700);
  const { automaticSearch } = useSelector(selectSettings);
  const textToTranslate = useSelector(selectTextToTranslate);
  const dispatch = useDispatch();
  const theme = useTheme();
  const { database, filterByText } = useDatabase();

  useEffect(() => {
    if (automaticSearch) {
      dispatch(setTextToTranslate(value));
    }
  }, [debounced]);

  useEffect(() => {
    if (value !== textToTranslate) {
      handleChange(textToTranslate);
    }
  }, [textToTranslate]);

  useEffect(() => {
    if (database.words) {
      const results = filterByText(database.words, textToTranslate);
      dispatch(setSearchResults(results));
    }
  }, [textToTranslate]);

  const handleSearch: FuncFormEventHandler = (e) => {
    e.preventDefault();
    dispatch(setTextToTranslate(value));
  };

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
