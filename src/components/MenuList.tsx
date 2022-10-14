import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import {
  MdHistory,
  MdOutlineSaveAlt,
  MdSettings,
  MdStar,
  MdTextFields,
  MdTextFormat,
  MdComment,
  MdGroup,
  MdSecurity,
  MdTextSnippet,
} from "react-icons/md";

import { Divider } from "@mui/material";

interface IOption {
  label: string;
  icon: React.ReactNode;
  textSecondary: string;
  divider?: boolean;
}

const options: IOption[] = [
  {
    label: "Histórico",
    icon: <MdHistory />,
    textSecondary: "Configure suas preferencias.",
  },
  {
    label: "Favoritos",
    icon: <MdStar />,
    textSecondary: "Guarde suas palavras favoritas.",
  },
  {
    label: "Frases guardadas",
    icon: <MdOutlineSaveAlt />,
    textSecondary: "Guarde frases para memorizar.",
    divider: true,
  },
  {
    label: "Verbos",
    icon: <MdTextFields />,
    textSecondary: "Lista dos verbos do umbundo/português.",
  },
  {
    label: "Frases",
    icon: <MdTextFormat />,
    textSecondary: "Aprenda frases em vários contextos.",
    divider: true,
  },
  {
    label: "Definições",
    icon: <MdSettings />,
    textSecondary: "Configure suas preferencias.",
  },
  {
    label: "Ajuda e Comentários",
    icon: <MdComment />,
    textSecondary: "Ajudê-nos dando o seu feedback.",
  },
  {
    label: "Sobre nós",
    icon: <MdGroup />,
    textSecondary: "Saiba mais sobre nós.",
    divider: true,
  },
  {
    label: "Politica de Privacidade",
    icon: <MdSecurity />,
    textSecondary: "Conheça nossas politicas.",
  },
  {
    label: "Termos de utilização",
    icon: <MdTextSnippet />,
    textSecondary: "Veja os termos da aplicação.",
  },
];

export default function MenuList() {
  return (
    <List
      sx={{
        width: "100%",
        padding: 0,
        zoom: "0.9",
      }}
    >
      {options.map((option) => (
        <React.Fragment>
          <ListItem key={option.label} button>
            <ListItemAvatar>
              <Avatar>{option.icon}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={option.label}
              secondary={option.textSecondary}
            />
          </ListItem>
          {option.divider && <Divider variant="middle" />}
        </React.Fragment>
      ))}
    </List>
  );
}
