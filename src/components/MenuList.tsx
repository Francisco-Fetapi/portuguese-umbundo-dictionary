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
import { useNavigate } from "react-router-dom";

interface IOption {
  label: string;
  icon: React.ReactNode;
  textSecondary: string;
  divider?: boolean;
  url: `/${string}`;
}

const options: IOption[] = [
  {
    label: "Histórico",
    icon: <MdHistory />,
    textSecondary: "Veja seus últimos termos de pesquisa.",
    url: "/historico",
  },
  {
    label: "Favoritos",
    icon: <MdStar />,
    textSecondary: "Listagem de palavras favoritadas.",
    url: "/favoritos",
  },
  {
    label: "Frases guardadas",
    icon: <MdOutlineSaveAlt />,
    textSecondary: "Veja as frases que guardaste.",
    divider: true,
    url: "/frases-guardadas",
  },
  {
    label: "Pesquisa avançada",
    icon: <MdTextFields />,
    textSecondary: "Consulte todas as palavras com diversos filtros",
    url: "/pesquisa-avancada",
  },
  {
    label: "Conversação",
    icon: <MdTextFormat />,
    textSecondary: "Aprenda frases em vários contextos.",
    divider: true,
    url: "/conversacao",
  },
  {
    label: "Definições",
    icon: <MdSettings />,
    textSecondary: "Configure suas preferencias.",
    url: "/definicoes",
  },
  {
    label: "Ajuda e Comentários",
    icon: <MdComment />,
    textSecondary: "Ajudê-nos dando o seu feedback.",
    url: "/ajuda-e-comentarios",
  },
  {
    label: "Sobre nós",
    icon: <MdGroup />,
    textSecondary: "Saiba mais sobre nós.",
    divider: true,
    url: "/sobre-nos",
  },
  {
    label: "Politica de Privacidade",
    icon: <MdSecurity />,
    textSecondary: "Conheça nossas politicas.",
    url: "/politicas-de-privacidade",
  },
  {
    label: "Termos de utilização",
    icon: <MdTextSnippet />,
    textSecondary: "Veja os termos da aplicação.",
    url: "/termos-de-utilizacao",
  },
];

export default function MenuList() {
  const navigate = useNavigate();
  return (
    <List
      sx={{
        width: "100%",
        padding: 0,
        zoom: "0.9",
      }}
    >
      {options.map((option) => (
        <React.Fragment key={option.label}>
          <ListItem button onClick={() => navigate(option.url)}>
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
