import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Text } from "../styles/General";
import MenuList from "./MenuList";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

interface Props {
  handleClose(): void;
  open: boolean;
}

export default function ModalMenu({ handleClose, open }: Props) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      maxWidth="md"
      PaperProps={{
        sx: {
          height: "100%",
          width: 500,
          background: "var(--primary-color2)",
          // color: "white",
          borderRadius: "20px",
          position: "relative",
          margin: "5px",
          maxWidth: "var(--max-width)",
        },
      }}
    >
      <DialogTitle
        variant="h5"
        align="center"
        // sx={{
        //   color: "#D0D0D0",
        // }}
      >
        Menu
      </DialogTitle>
      <DialogContent sx={{ padding: 0 }}>
        <Text variant="subtitle2">
          <MenuList />
        </Text>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  );
}
