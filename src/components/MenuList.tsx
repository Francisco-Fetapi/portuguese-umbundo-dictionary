import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { MdOutlineSaveAlt, MdSettings, MdStar } from "react-icons/md";
import { Divider } from "@mui/material";

interface IOption {
  label: string;
  icon: React.ReactNode;
  textSecondary: string;
  divider?: boolean;
}

const options: IOption[] = [
  {
    label: "Definições",
    icon: <MdSettings />,
    textSecondary: "Configure suas preferencias.",
  },
  {
    label: "Favoritos",
    icon: <MdStar />,
    textSecondary: "Guarde seus favoritos",
  },
  {
    label: "Frases guardadas",
    icon: <MdOutlineSaveAlt />,
    textSecondary: "Guarde frases para memorizar",
    divider: true,
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
          <ListItem key={option.label}>
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
