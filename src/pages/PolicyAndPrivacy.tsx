import { Box } from "@mui/material";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import { BoxColumnCenter, Text } from "../styles/General";

export default function PolicyAndPrivacy() {
  return (
    <PageHeader pageName="Politicas de Privacidade">
      <BoxColumnCenter height="90%" justifyContent="center">
        <Box mb={1}>
          <Text align="center">Utilização de dados sensiveis</Text>
        </Box>
        <Text align="center" fontWeight={300}>
          Abaixo é expressa a única politica de privacidade da aplicação em
          relação a utilização de dados sensiveis:
        </Text>
        <Box mt={3} px={1} display="flex" flexDirection="column">
          <Box>
            <FaQuoteLeft />
          </Box>
          <Box px={3} mt={-2.5}>
            <Text variant="subtitle2" fontWeight={300} align="center">
              As informações presentes no seu dispositivo não são de maneira
              alguma utilizadas pela aplicação. A aplicação funciona
              completamente independente dos dados de quem a utiliza, sua
              localização, nome, idade, nacionalidade, ou credenciais de suas
              contas não são utilizadas.
            </Text>
          </Box>
          <Box mt={-2.5} alignSelf="flex-end">
            <FaQuoteRight />
          </Box>
        </Box>
      </BoxColumnCenter>
    </PageHeader>
  );
}
