import { Box, Link } from "@mui/material";
import PageHeader from "../components/PageHeader";
import { Text } from "../styles/General";

export default function AboutUs() {
  return (
    <PageHeader pageName="Sobre Nós">
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Text variant="h5">Dicionário Umbundo - Português</Text>
        <Text variant="subtitle2" color="gray">
          Versão 1.0.0
        </Text>
        {/* <Box mt={1}>
          <Text variant="subtitle2">
            Copyright &copy; 2022, todos os direitos reservados.
          </Text>
        </Box> */}

        <Box mt={2}>
          <Text variant="subtitle2">Visite nossa página no facebook</Text>
          <Link
            variant="subtitle2"
            href="https://facebook.com/dicionario-umbundo-portugues"
          >
            Página do facebook
          </Link>
        </Box>

        <Box mt={2}>
          <Text variant="subtitle2">Enviar comentários para</Text>
          <Link variant="subtitle2" href="maito://franciscofetapi10@gmail.com">
            Este email
          </Link>
        </Box>

        <Box mt={2} px={2}>
          <Text variant="subtitle1">Créditos</Text>
          <Text variant="subtitle2">
            Nome pessoa1, Nome pessoa2, Nome pessoa3, Nome pessoa4, Nome pessoa5
          </Text>
        </Box>
      </Box>
      <Box flexGrow={1} />
      <Box my={2}>
        <Text color="gray" fontWeight={300} variant="subtitle2" align="center">
          Copyright &copy; 2022, todos os direitos reservados.
        </Text>
      </Box>
    </PageHeader>
  );
}
