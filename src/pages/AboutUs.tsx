import { Box, Link } from "@mui/material";
import PageHeader from "../components/PageHeader";
import { Text } from "../styles/General";
import config from "../config.json";

export default function AboutUs() {
  return (
    <PageHeader pageName="Sobre Nós">
      <Box
        sx={{
          textAlign: "center",
        }}
        py={2}
      >
        <Text variant="h5">Dicionário Umbundo - Português</Text>
        <Text variant="subtitle2" color="gray">
          Versão 1.0.0
        </Text>

        <Box mt={2}>
          <Text variant="subtitle2">Visite nossa página no facebook</Text>
          <Link
            variant="subtitle2"
            href={`https://facebook.com/page/${config.application_facebook_page}`}
            target="__blank"
          >
            Página do facebook
          </Link>
        </Box>

        <Box mt={2}>
          <Text variant="subtitle2">Enviar comentários para</Text>
          <Link
            variant="subtitle2"
            href={`mailto://${config.application_email}`}
          >
            Este email
          </Link>
        </Box>

        <Box mt={2} px={2}>
          <Text variant="subtitle1">CRÉDITOS</Text>
          <Box>
            <Text variant="subtitle2" align="left" fontWeight={300}>
              <ul
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                }}
              >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <li key={item}>Nome da pessoa{item}</li>
                ))}
              </ul>
            </Text>
          </Box>
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
