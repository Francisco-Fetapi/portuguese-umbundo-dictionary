import { Button, IconButton, Stack, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguagesPositions } from "../store/App.selectors";
import { MdCompareArrows } from "react-icons/md";
import { toggleLanguage } from "../store/App.store";

export default function LanguageToggle() {
  const languages = useSelector(selectLanguagesPositions);
  const dispatch = useDispatch();
  return (
    <Stack direction="row" alignItems="center">
      <ButtonLanguage label={languages.from} />
      <Box>
        <IconButton onClick={() => dispatch(toggleLanguage())}>
          <MdCompareArrows color="white" size={30} />
        </IconButton>
      </Box>
      <ButtonLanguage label={languages.to} />
    </Stack>
  );
}

interface ButtonLanguageProps {
  label: keyof ILogos;
}

interface ILogos {
  Português: string;
  Umbundo: string;
}

export interface ShortLanguage extends ILogos {}

function ButtonLanguage({ label }: ButtonLanguageProps) {
  const logos: ILogos = {
    Português: "logo-portugal.jpg",
    Umbundo: "logo-angola.jpg",
  };
  return (
    <Button
      disabled
      startIcon={
        <img src={`/img/${logos[label]}`} alt="Icon" width={20} height={15} />
      }
      sx={{
        ":disabled": {
          color: "var(--primary-color-text)",
        },
      }}
      size="small"
      variant="contained"
      style={{
        background: "var(--primary-color)",
        zoom: 0.85,
        width: 130,
        height: 45,
      }}
    >
      {label}
    </Button>
  );
}
