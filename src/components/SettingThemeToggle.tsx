import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { selectSettings } from "../store/App.selectors";
import { useSelector } from "react-redux";

interface SettingThemeProps {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

export default function SettingThemeToggle({
  open,
  handleOpen,
  handleClose,
}: SettingThemeProps) {
  const { darkMode } = useSelector(selectSettings);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Escolher tema</DialogTitle>
      <DialogContent>
        <FormControlLabel
          label="Claro"
          control={<Radio checked={!darkMode} />}
        />
        <FormControlLabel
          label="Escuro"
          control={<Radio checked={darkMode} />}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  );
}
