import { Box, Fab, Stack } from "@mui/material";
import { BoxColumnCenter, Text, FooterContainer } from "../styles/General";
import { MdGroup, MdTextFields, MdTranslate } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useNetwork } from "@mantine/hooks";
import { useSnackbar } from "notistack";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useEffect } from "react";

interface FooterProps {
  forTraductorPage?: boolean;
  setText: (value: string) => void;
}

export default function Footer({ forTraductorPage, setText }: FooterProps) {
  const navigate = useNavigate();
  const network = useNetwork();
  const { enqueueSnackbar } = useSnackbar();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  function handleMicrophone() {
    if (!browserSupportsSpeechRecognition) {
      enqueueSnackbar("Seu dispositivo não suporta digitação por voz.", {
        variant: "error",
        autoHideDuration: 3 * 1000,
      });
    }
    if (!network.online) {
      enqueueSnackbar("Sem conexão com a internet", {
        variant: "error",
        autoHideDuration: 3 * 1000,
      });
      console.log("Sem internet");
      return;
    }
    console.log("Tudo ok");
    if (!listening) {
      SpeechRecognition.startListening({
        language: "pt-PT",
      });
    } else {
      SpeechRecognition.stopListening();
    }
  }

  useEffect(() => {
    setText(transcript.replace(/\./, "").toLowerCase());
  }, [transcript]);

  if (forTraductorPage) {
    return (
      <FooterContainer style={{ bottom: 30 }}>
        <Stack direction="row" justifyContent="space-evenly">
          <FabWithText
            label={listening ? "Ouvindo..." : "Falar"}
            icon={<FaMicrophone size={30} />}
            handleClick={handleMicrophone}
          />
        </Stack>
      </FooterContainer>
    );
  }

  return (
    <FooterContainer>
      <Stack direction="row" justifyContent="space-evenly">
        <FabWithText
          label="Tradutor"
          icon={<MdTranslate size={30} />}
          handleClick={() => navigate("/tradutor")}
        />
        <FabWithText
          bigger
          label={listening ? "Ouvindo..." : "Falar"}
          icon={<FaMicrophone size={30} />}
          handleClick={handleMicrophone}
        />
        <FabWithText
          label="Pesquisa Avançada"
          icon={<MdTextFields size={30} />}
          handleClick={() => navigate("/pesquisa-avancada")}
        />
      </Stack>
    </FooterContainer>
  );
}

interface FabWithTextProps {
  icon: React.ReactNode;
  label: string;
  bigger?: boolean;
  handleClick: () => void;
}

function FabWithText({ icon, label, bigger, handleClick }: FabWithTextProps) {
  return (
    <BoxColumnCenter
      style={
        bigger
          ? {
              zoom: 1.3,
            }
          : undefined
      }
      onClick={handleClick}
    >
      <Fab color="primary">{icon}</Fab>
      <Box mt={0.5}>
        <Text
          align="center"
          color="white"
          fontWeight="bold"
          variant="subtitle2"
        >
          {label}
        </Text>
      </Box>
    </BoxColumnCenter>
  );
}
