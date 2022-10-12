import { Button, IconButton, Stack, Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectLanguagesPositions } from "../store/App.selectors";
import { MdCompareArrows } from "react-icons/md";

export default function LanguageToggle() {
  const languages = useSelector(selectLanguagesPositions);
  return (
    <Stack direction="row">
      <ButtonLanguage label={languages.from} />
      <Box>
        <IconButton>
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

function ButtonLanguage({ label }: ButtonLanguageProps) {
  const logos: ILogos = {
    Português: "logo-portugal.png",
    Umbundo: "logo-angola.png",
  };
  return (
    <Button
      startIcon={
        <img src={`/img/${logos[label]}`} alt="Icon" width={20} height={15} />
      }
      size="small"
      variant="contained"
      style={{
        background: "var(--primary-color)",
        zoom: 0.85,
      }}
    >
      {label}
    </Button>
  );
}
