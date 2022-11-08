import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import PageHeader from "../components/PageHeader";
import WordList from "../components/WordList";
import { selectFavorites } from "../store/App.selectors";

export default function Favorites() {
  const favorites = useSelector(selectFavorites);

  return (
    <PageHeader
      pageName="Favoritos"
      noInitialMargin={!!(favorites?.length || 0)}
    >
      <Box>
        <WordList words={favorites} />
      </Box>
    </PageHeader>
  );
}
