import { useWindowEvent } from "@mantine/hooks";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { MdContentPaste } from "react-icons/md";

export default function PasteButton() {
  const [textToPaste, setTextToPaste] = useState("");
  async function setCopied() {
    try {
      let copied = await navigator.clipboard.readText();
      setTextToPaste(copied);
    } catch (e) {
      console.log("erro", e);
    }
  }

  useEffect(() => {
    setCopied();
  }, []);

  useWindowEvent("focus", (event) => {
    if (textToPaste.length === 0) {
      setCopied();
    }
  });

  function handle() {
    console.log(textToPaste);
  }
  return (
    <div>
      {textToPaste.length > 0 && (
        <Button
          startIcon={<MdContentPaste />}
          sx={(theme) => ({
            background: theme.palette.primary.main,
          })}
          variant="contained"
          disableElevation
          size="small"
          style={{ borderRadius: "18px" }}
          onClick={handle}
        >
          Colar&nbsp;&nbsp;&nbsp;
        </Button>
      )}
    </div>
  );
}
