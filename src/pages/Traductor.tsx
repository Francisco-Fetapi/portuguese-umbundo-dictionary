import { Box, Button, ButtonGroup, TextField, useTheme } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import LanguageToggle from "../components/LanguageToggle";
import PageHeader from "../components/PageHeader";
import PasteButton from "../components/PasteButton";
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

      <Box mt={1} display="flex" justifyContent="center">
        {textToTranslate.length === 0 ? (
          <PasteButton handleCopy={setTextToTranslate} />
        ) : (
          <ButtonGroup variant="contained" size="small">
            <Button>Traduzir</Button>
          </ButtonGroup>
        )}
      </Box>

      <Box
        mt={4}
        px={1}
        sx={{
          borderLeft: "3px solid var(--primary-color-text)",
          maxHeight: 100,
          overflow: "auto",
        }}
      >
        <Text fontWeight={300}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio enim,
          minima recusandae dolorum ex similique rerum eius. Pariatur officiis
          impedit tempore repellendus. Facere corporis saepe illo velit quasi
          blanditiis error! minima recusandae dolorum ex similique rerum eius.
          Pariatur officiis impedit tempore repellendus. Facere corporis saepe
          illo velit quasi blanditiis error!
        </Text>
      </Box>

      <Footer forTraductorPage setText={(value) => setTextToTranslate(value)} />
    </PageHeader>
  );
}
