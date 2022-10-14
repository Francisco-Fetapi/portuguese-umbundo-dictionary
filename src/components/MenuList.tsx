import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { MdSettings, MdStar } from "react-icons/md";

interface IOption {
  label: string;
  icon: React.ReactNode;
  textSecondary: string;
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
        <ListItem key={option.label} divider>
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
  );
}
