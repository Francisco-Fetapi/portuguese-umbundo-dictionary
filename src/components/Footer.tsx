import { Box, Fab, Stack } from "@mui/material";
import { BoxColumnCenter, Text, FooterContainer } from "../styles/General";
import { MdGroup, MdTextFields } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useNetwork } from "@mantine/hooks";
import { useSnackbar } from "notistack";

export default function Footer() {
  const navigate = useNavigate();
  const network = useNetwork();
  const { enqueueSnackbar } = useSnackbar();

  function handleMicrophone() {
    if (!network.online) {
      enqueueSnackbar("Sem conexão com a internet", {
        variant: "error",
        autoHideDuration: 3 * 1000,
      });
      console.log("Sem internet");
      return;
    }
    console.log("Tudo ok");
  }
  return (
    <FooterContainer>
      <Stack direction="row" justifyContent="space-evenly">
        <FabWithText
          label="Conversa"
          icon={<MdGroup size={30} />}
          handleClick={() => navigate("/conversacao")}
        />
        <FabWithText
          bigger
          label="Falar"
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
