import { Box, Link } from "@mui/material";
import PageHeader from "../components/PageHeader";
import { Text } from "../styles/General";

export default function UtilityTerms() {
  return (
    <PageHeader pageName="Termos de utilização">
      <Box my={2} px={1.2}>
        <Text align="center" fontWeight={300} variant="body2">
          Ao utilizar a plataforma o <b>usuário aceita integralmente</b> as
          presentes normas e compromete- se a observá-las.
        </Text>

        <Box mt={2}>
          <Text align="center" fontWeight={300} variant="body2">
            A aceitação do presente instrumento é <b>imprescindível</b> para o
            acesso e para a utilização de quaisquer serviços fornecidos pela
            aplicação. Caso não concorde com as disposições deste instrumento, o
            usuário não deve utilizá-los.
          </Text>
        </Box>

        <Box mt={2}>
          <ul>
            <li>
              <Text fontWeight={300} variant="subtitle2">
                A utilização do presente aplicativo não exige algum tipo de
                autenticação, todos os dados pessoais relacionados ao aplicativo
                (como o histórico de pesquisa, por exemplo) serão{" "}
                <b>armazanados localmente</b>, não asseguramos a recuperação dos
                dados caso você desinstale o aplicativo ou o acesse em um outro
                dispositivo.
              </Text>
            </li>
            <li>
              <Text fontWeight={300} variant="subtitle2">
                Nos informar a partir da nossa &nbsp;
                <Link href="https://facebook.com/pages/pt" target="__blank">
                  página no facebook
                </Link>{" "}
                sobre qualquer mau funcionamento da aplicação fixando no final
                da mensagem as especificações do seu dispositivo, marca, modelo,
                sistema operacional e versão do dispositivo.
              </Text>
            </li>
          </ul>
        </Box>
      </Box>
    </PageHeader>
  );
}
