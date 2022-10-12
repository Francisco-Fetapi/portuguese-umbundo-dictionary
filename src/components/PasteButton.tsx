import { Button } from "@mui/material";
import { MdContentPaste } from "react-icons/md";

export default function PasteButton() {
  return (
    <div>
      <Button
        startIcon={<MdContentPaste />}
        sx={(theme) => ({
          background: theme.palette.primary.dark,
        })}
        variant="contained"
        disableElevation
        style={{ borderRadius: "18px" }}
      >
        Colar
      </Button>
    </div>
  );
}
