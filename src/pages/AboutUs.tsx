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
            href={config.application_facebook_page}
            target="__blank"
          >
            Página do facebook
          </Link>
        </Box>

        <Box mt={2}>
          <Text variant="subtitle2">Envie comentários/sugestões para</Text>
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
                {config.contribuitors.map((contribuitor) => (
                  <li key={contribuitor.name}>{contribuitor.name}</li>
                ))}
              </ul>
            </Text>
          </Box>
        </Box>
      </Box>
      <Box flexGrow={1} />
      <Box my={2}>
        <Text color="gray" fontWeight={400} variant="subtitle2" align="center">
          Copyright &copy; {new Date().getFullYear()} - todos os direitos
          reservados.
        </Text>
      </Box>
    </PageHeader>
  );
}
