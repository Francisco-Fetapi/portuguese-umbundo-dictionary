import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { selectSettings } from "../store/App.selectors";
import { useSelector } from "react-redux";

interface SettingThemeProps {
  open: boolean;
  chooseTheme: (theme: boolean) => void;
  handleClose: () => void;
}

export default function SettingThemeToggle({
  open,
  chooseTheme,
  handleClose,
}: SettingThemeProps) {
  const { darkMode } = useSelector(selectSettings);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          minWidth: 250,
        },
      }}
    >
      <DialogTitle>Escolher tema</DialogTitle>
      <DialogContent>
        <RadioGroup
          value={darkMode}
          onChange={(e) =>
            chooseTheme(e.target.value === "true" ? true : false)
          }
        >
          <FormControlLabel label="Claro" value={false} control={<Radio />} />
          <FormControlLabel label="Escuro" value={true} control={<Radio />} />
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  );
}
