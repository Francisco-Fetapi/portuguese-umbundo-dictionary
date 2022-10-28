import { Box, Button, ButtonGroup, TextField, useTheme } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "../components/Footer";
import LanguageToggle from "../components/LanguageToggle";
import PageHeader from "../components/PageHeader";
import PasteButton from "../components/PasteButton";
import useTraductor from "../hooks/useTraductor";
import {
  ILanguageShort,
  languagesShortMap,
  selectLanguagesPositions,
} from "../store/App.selectors";
import { Text } from "../styles/General";

const LanguageToggleContainer = styled.div`
  &.light {
    svg {
      color: black !important;
    }
  }
`;

export default function Traductor() {
  const [textToTranslate, setTextToTranslate] = useState("");
  const theme = useTheme();
  const { translate } = useTraductor();
  const { from, to } = useSelector(selectLanguagesPositions);
  const fromLanguageShortForm = languagesShortMap[from] as ILanguageShort;
  const toLanguageShortForm = languagesShortMap[to] as ILanguageShort;
  const [translated, setTranslated] = useState("");

  function handleTranslate() {
    console.log(toLanguageShortForm);
    const result = translate(
      textToTranslate,
      fromLanguageShortForm,
      toLanguageShortForm
    );
    console.log(result);
    setTranslated(result.join(" "));
  }

  return (
    <PageHeader
      pageName="Tradutor"
      noInitialMargin
      containerProps={{
        style: {
          position: "relative",
        },
      }}
    >
      <Box display="flex" justifyContent="center" my={1}>
        <LanguageToggleContainer className={theme.palette.mode}>
          <LanguageToggle />
        </LanguageToggleContainer>
      </Box>
      <Box mt={1} px={1}>
        <TextField
          variant="standard"
          multiline
          minRows={2}
          maxRows={4}
          label="Texto a ser traduzido"
          fullWidth
          value={textToTranslate}
          onChange={(e) => setTextToTranslate(e.target.value)}
        />
      </Box>

      {translated.length === 0 ? (
        <Box mt={1} display="flex" justifyContent="center">
          {textToTranslate.length === 0 ? (
            <PasteButton handleCopy={setTextToTranslate} />
          ) : (
            <ButtonGroup variant="contained" size="small">
              <Button onClick={handleTranslate}>Traduzir</Button>
            </ButtonGroup>
          )}
        </Box>
      ) : (
        <Box mt={1} display="flex" justifyContent="center">
          <Button
            variant="contained"
            size="small"
            onClick={() => setTranslated("")}
          >
            Limpar tradução
          </Button>
        </Box>
      )}

      <Box
        mt={4}
        px={1}
        sx={(theme) => ({
          borderLeft: `3px solid ${theme.palette.primary.main}`,
          maxHeight: 100,
          overflow: "auto",
        })}
      >
        <Text fontWeight={300}>{translated}</Text>
      </Box>

      <Footer forTraductorPage setText={(value) => setTextToTranslate(value)} />
    </PageHeader>
  );
}
