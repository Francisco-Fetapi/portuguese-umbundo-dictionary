import { useWindowEvent } from "@mantine/hooks";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { MdContentPaste } from "react-icons/md";
import { useDispatch } from "react-redux";

interface PasteButtonProps {
  handleCopy: (value: string) => void;
}

export default function PasteButton({ handleCopy }: PasteButtonProps) {
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
    handleCopy(textToPaste);
  }
  return (
    <>
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
    </>
  );
}
