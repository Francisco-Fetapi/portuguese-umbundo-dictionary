import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import { MdHistory, MdLanguage, MdPalette, MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import PageHeader from "../components/PageHeader";
import SettingThemeToggle from "../components/SettingThemeToggle";
import useBoolean from "../hooks/useBoolean";
import { selectSettings } from "../store/App.selectors";
import { setSettings } from "../store/App.store";

interface IOption {
  label: string;
  icon: React.ReactNode;
  textSecondary: string;
  secondaryAction?: React.ReactNode;
  handleClick: () => void;
}

export default function Settings() {
  const settings = useSelector(selectSettings);
  const dispatch = useDispatch();
  const modal = useBoolean();

  const toggleAutomaticSearch = () =>
    dispatch(
      setSettings({
        automaticSearch: !settings.automaticSearch,
      })
    );

  const handleSaveHistory = () => {
    dispatch(
      setSettings({
        saveHistory: !settings.saveHistory,
      })
    );
  };

  const chooseTheme = (theme: boolean) => {
    dispatch(
      setSettings({
        darkMode: theme,
      })
    );
  };
  const handleTheme = () => {
    modal.handleOpen();
  };

  const handleChangeLanguage = () => {
    // dispatch(
    //   setSettings({
    //     appLanguage:
    //       settings.appLanguage === "Português" ? "Umbundo" : "Português",
    //   })
    // );
  };

  const options: IOption[] = [
    {
      label: "Pesquisa Automática",
      icon: <MdSearch />,
      // textSecondary: `Com essa opção selecionada, os resultados da pesquisa surgem enquanto você digita o texto, caso contrário, terás que clicar no botão pesquisar.`,
      textSecondary:
        "Mostrar resultados enquanto se digita o termo de pesquisa",
      secondaryAction: (
        <Switch
          edge="end"
          onChange={toggleAutomaticSearch}
          checked={settings.automaticSearch}
        />
      ),
      handleClick: toggleAutomaticSearch,
    },
    {
      label: "Armazenar histórico",
      icon: <MdHistory />,
      textSecondary: `Sempre salvar o historico de palavras vistas`,
      secondaryAction: (
        <Switch
          edge="end"
          onChange={handleSaveHistory}
          checked={settings.saveHistory}
        />
      ),
      handleClick: handleSaveHistory,
    },
    {
      label: "Tema",
      icon: <MdPalette />,
      textSecondary: `Altere o tema da aplicaçã entre claro e escuro`,
      handleClick: handleTheme,
    },
    // {
    //   label: "Idioma da aplicação",
    //   icon: <MdLanguage />,
    //   textSecondary: `Alterar o idioma da aplicação`,
    //   handleClick: handleChangeLanguage,
    // },
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
            <ListItem
              secondaryAction={option.secondaryAction}
              button
              divider
              key={option.label}
              onClick={option.handleClick}
            >
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
      <SettingThemeToggle {...modal} chooseTheme={chooseTheme} />
    </PageHeader>
  );
}
