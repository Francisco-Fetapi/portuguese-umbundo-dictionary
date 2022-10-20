import PageHeader from "../components/PageHeader";
import { useParams } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import { Text } from "../styles/General";
import useDatabase from "../hooks/useDatabase";

export default function Word() {
  const params = useParams();
  const { getWord } = useDatabase();
  const word = getWord(params.word!);
  let wordClass = word?.class || "";
  if (wordClass) {
    wordClass += ". - ";
  }

  console.log(word);
  return (
    <PageHeader pageName="Dicionário" noInitialMargin>
      <Box>
        <Box
          sx={(theme) => ({
            backgroundImage: `linear-gradient(to bottom, ${theme.palette.primary.dark},transparent)`,
          })}
        >
          <Text
            sx={{
              color: "var(--primary-color-text)",
            }}
            align="center"
            variant="h5"
            py={0.7}
            mt={0.08}
            fontWeight={700}
          >
            Definição
          </Text>
        </Box>
        <Box mt={2.5} px={1.5}>
          <Text
            variant="h5"
            sx={{
              textTransform: "capitalize",
              fontWeight: 900,
              color: "var(--primary-color-text)",
            }}
          >
            {word?.pt}
          </Text>

          <Box mt={1}>
            <Text color="gray">
              {wordClass} {word?.um.join(", ")}
            </Text>
          </Box>

          <Box mt={2}>
            <Text
              variant="h6"
              fontWeight={600}
              sx={{
                color: "var(--primary-color-text)",
              }}
            >
              Exemplo(s)
            </Text>

            <Box mt={1}>
              {word?.examples && word.examples.length > 0 ? (
                word?.examples.map((example) => (
                  <Stack alignItems="center" direction="row" gap={1}>
                    <Text variant="subtitle2">{example.pt} </Text>-
                    <Text variant="subtitle2" color="gray">
                      {example.um}
                    </Text>
                  </Stack>
                ))
              ) : (
                <Text color="gray" variant="subtitle2">
                  Sem exmplos no momento.
                </Text>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </PageHeader>
  );
}
