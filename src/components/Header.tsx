import { Box, IconButton, Stack, useTheme } from "@mui/material";
import { HeaderContainer, Text } from "../styles/General";
import { MdStar, MdMenu } from "react-icons/md";
import InputText from "./InputText";
import PasteButton from "./PasteButton";
import TranslatedArea from "./TranslatedArea";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchResults,
  selectTextToTranslate,
} from "../store/App.selectors";
import { setMenu, setTextToTranslate } from "../store/App.store";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const textToTranslate = useSelector(selectTextToTranslate);
  const navigate = useNavigate();
  const searchResults = useSelector(selectSearchResults);

  return (
    <HeaderContainer
      className={textToTranslate.length > 0 ? "full" : undefined}
      id="header-container"
    >
      <Box pt={2} px={0.8}>
        <Stack direction="row" alignItems="center">
          <IconButton onClick={() => navigate("/favoritos")}>
            <MdStar size={30} color={theme.palette.primary.light} />
          </IconButton>
          <Stack
            flexGrow={1}
            direction="row"
            gap={0.5}
            alignItems="center"
            justifyContent="center"
            style={{ zoom: 0.95 }}
          >
            <Text variant="h6" fontWeight="bold">
              Dicionário
            </Text>
            <Text variant="h6" fontWeight={300}>
              Português
            </Text>
          </Stack>
          <IconButton onClick={() => dispatch(setMenu(true))}>
            <MdMenu size={30} color={theme.palette.primary.light} />
          </IconButton>
        </Stack>
        <Box position="relative" top={-10}>
          <Text align="center" variant="subtitle2" fontWeight={300}>
            Umbundo
          </Text>
        </Box>
        <Box mt={1} px={1}>
          <InputText />
        </Box>

        {textToTranslate.length === 0 && (
          <Box mt={1} mb={2} display="flex" justifyContent="center">
            <PasteButton
              handleCopy={(value) => dispatch(setTextToTranslate(value))}
            />
          </Box>
        )}
        {textToTranslate.length >= 1 && (
          <Box mt={2}>
            <TranslatedArea />
          </Box>
        )}
      </Box>
      {(searchResults.length === 0 || textToTranslate.length === 0) && (
        <div className="ornament">
          <div />
        </div>
      )}
    </HeaderContainer>
  );
}
