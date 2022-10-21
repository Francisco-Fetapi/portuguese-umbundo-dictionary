import { Box, IconButton } from "@mui/material";
import { useSnackbar } from "notistack";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import PageHeader from "../components/PageHeader";
import WordList from "../components/WordList";
import { selectHistory } from "../store/App.selectors";
import { removeAllHistory } from "../store/App.store";

export default function History() {
  const history = useSelector(selectHistory);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  function handleRemoveAll() {
    enqueueSnackbar("Histórico limpo", {
      variant: "success",
      autoHideDuration: 3 * 1000,
    });
    dispatch(removeAllHistory());
  }
  return (
    <PageHeader
      pageName="Histórico"
      noInitialMargin={!!history.length}
      secondaryAction={
        history.length > 0 && <RemoveAllArea handleClick={handleRemoveAll} />
      }
    >
      <Box>
        <WordList words={history} />
      </Box>
    </PageHeader>
  );
}

interface RemoveAllAreaProps {
  handleClick: () => void;
}

function RemoveAllArea({ handleClick }: RemoveAllAreaProps) {
  return (
    <div>
      <IconButton onClick={handleClick}>
        <MdDelete />
      </IconButton>
    </div>
  );
}
