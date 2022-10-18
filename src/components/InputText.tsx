import { useDebouncedValue, useInputState } from "@mantine/hooks";
import { Box, useTheme } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSettings } from "../store/App.selectors";
import { setTextToTranslate } from "../store/App.store";
import { InputArea } from "../styles/General";

type FuncFormEventHandler = React.FormEventHandler<HTMLFormElement> | undefined;

export default function InputText() {
  const [value, handleChange] = useInputState("");
  const [debounced] = useDebouncedValue(value, 1000);
  const { automaticSearch } = useSelector(selectSettings);
  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    if (automaticSearch) {
      dispatch(setTextToTranslate(value));
    }
  }, [debounced]);

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
