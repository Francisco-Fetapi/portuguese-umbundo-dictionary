import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import PageHeader from "../components/PageHeader";
import WordList from "../components/WordList";
import { selectHistory } from "../store/App.selectors";

export default function History() {
  const history = useSelector(selectHistory);
  return (
    <PageHeader pageName="Histórico" noInitialMargin={!!history.length}>
      <Box>
        <WordList words={history} />
      </Box>
    </PageHeader>
  );
}
