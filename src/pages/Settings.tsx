import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import { FaHistory, FaSearch } from "react-icons/fa";
import { MdHistory, MdLanguage, MdPalette, MdSearch } from "react-icons/md";
import PageHeader from "../components/PageHeader";

interface IOption {
  label: string;
  icon: React.ReactNode;
  textSecondary: string;
  secondaryComponent?: React.ReactNode;
}

export default function Settings() {
  const options: IOption[] = [
    {
      label: "Pesquisa Automática",
      icon: <MdSearch />,
      textSecondary: `Com essa opção selecionada, os resultados da pesquisa surgem enquanto você digita o texto, caso contrário, terás que clicar no botão pesquisar.`,
    },
    {
      label: "Armazenas histórico",
      icon: <MdHistory />,
      textSecondary: `Sempre salvar o historico de pesquisa de palavras`,
    },
    {
      label: "Tema",
      icon: <MdPalette />,
      textSecondary: `Altere o tema da aplicaçã entre claro e escuro`,
    },
    {
      label: "Idioma da aplicação",
      icon: <MdLanguage />,
      textSecondary: `Alterar o idioma da aplicação`,
    },
  ];

  return (
    <PageHeader pageName="Definições" noInitialMargin>
      <Box>
        <List
          sx={{
            width: "100%",
            padding: 0,
            zoom: "0.9",
          }}
        >
          {options.map((option) => (
            <ListItem button divider key={option.label}>
              <ListItemAvatar>
                <Avatar>{option.icon}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={option.label}
                secondary={option.textSecondary}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </PageHeader>
  );
}
