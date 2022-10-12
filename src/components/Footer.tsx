import { Box, Fab, Stack } from "@mui/material";
import { BoxColumnCenter, Text, FooterContainer } from "../styles/General";
import { MdGroup, MdCamera } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";

export default function Footer() {
  return (
    <FooterContainer>
      <Stack direction="row" justifyContent="space-evenly">
        <FabWithText label="Conversa" icon={<MdGroup size={30} />} />
        <FabWithText bigger label="Falar" icon={<FaMicrophone size={30} />} />
        <FabWithText label="Camâra" icon={<MdCamera size={30} />} />
      </Stack>
    </FooterContainer>
  );
}

interface FabWithTextProps {
  icon: React.ReactNode;
  label: string;
  bigger?: boolean;
}

function FabWithText({ icon, label, bigger }: FabWithTextProps) {
  return (
    <BoxColumnCenter
      style={
        bigger
          ? {
              zoom: 1.3,
            }
          : undefined
      }
    >
      <Fab
        sx={(theme) => ({
          backgroundColor: theme.palette.primary.dark,
          color: "#F0F0F0",
        })}
      >
        {icon}
      </Fab>
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
