import { useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectTextToTranslate } from "../store/App.selectors";
import { setTextToTranslate } from "../store/App.store";
import { InputArea } from "../styles/General";

type FuncHandleChange = React.ChangeEventHandler<HTMLInputElement> | undefined;

export default function InputText() {
  const value = useSelector(selectTextToTranslate);
  const dispatch = useDispatch();
  const handleChange: FuncHandleChange = (e) => {
    dispatch(setTextToTranslate(e.target.value));
  };
  const theme = useTheme();

  return (
    <InputArea>
      <input
        value={value}
        onChange={handleChange}
        placeholder="Introduza a palavra"
        className={theme.palette.mode}
      />
    </InputArea>
  );
}
