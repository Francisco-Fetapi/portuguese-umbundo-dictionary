import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Text } from "../styles/General";

import { MdClose } from "react-icons/md";
import { IconButton } from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

interface Props {
  handleClose(): void;
  open: boolean;
}

export default function ModalMenu({ handleClose, open }: Props) {
  function done() {}
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth="md"
        PaperProps={{
          sx: {
            height: "100%",
            width: 500,
            background: "var(--primary-color2)",
            color: "white",
            borderRadius: "20px",
            position: "relative",
          },
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: 4,
            left: 4,
            color: "#D0D0D0",
          }}
        >
          <MdClose />
        </IconButton>
        <DialogTitle
          variant="h5"
          align="center"
          sx={(theme) => ({
            color: "#D0D0D0",
          })}
        >
          Menu
        </DialogTitle>
        <DialogContent>
          <Text variant="subtitle2">Content</Text>
        </DialogContent>
        <DialogActions>
          <Button onClick={done}>Concluir</Button>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
