import { Button } from "@mui/material";
import { MdContentPaste } from "react-icons/md";

export default function PasteButton() {
  return (
    <div>
      <Button
        startIcon={<MdContentPaste />}
        color="primary"
        variant="contained"
        disableElevation
        style={{ borderRadius: "18px" }}
      >
        Colar
      </Button>
    </div>
  );
}
