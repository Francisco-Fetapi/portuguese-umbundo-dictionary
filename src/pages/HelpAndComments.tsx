import { Box, Button, TextField } from "@mui/material";
import PageHeader from "../components/PageHeader";
import { useInputState } from "@mantine/hooks";
import { BoxColumnCenter, Text } from "../styles/General";
import config from "../config.json";

export default function HelpAndComments() {
  const [value, handleChange] = useInputState("");

  const emailSubject = window.encodeURI("Feedback em relação ao Aplicativo.");
  const body = window.encodeURI(value);

  const finalLink = `mailto://${config.application_email}?subject=${emailSubject}&body=${body}`;
  const maxLength = 50;

  return (
    <PageHeader pageName="Ajuda e Comentários">
      <Box
        mt={2}
        px={2}
        component="form"
        noValidate
        autoComplete="off"
        action={finalLink}
      >
        <Text
          align="center"
          fontWeight={300}
          sx={{
            textTransform: "uppercase",
          }}
        >
          Formulário de contato
        </Text>
        <Box mt={2.3}>
          <TextField
            label="Escreva sua mensagem"
            multiline
            rows={9}
            fullWidth
            value={value}
            onChange={handleChange}
            name="message"
            inputProps={{ maxLength }}
            helperText={`${value.length}/${maxLength}`}
          />
        </Box>
        <BoxColumnCenter mt={2}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            sx={{
              minWidth: 130,
            }}
            type="submit"
          >
            Enviar
          </Button>
        </BoxColumnCenter>
      </Box>
    </PageHeader>
  );
}
