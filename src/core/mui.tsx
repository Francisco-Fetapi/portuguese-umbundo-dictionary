import React from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import CssBaseline from "@mui/material/CssBaseline";
import { GlobalStyles } from "../styles/GlobalStyles";
import { selectSettings } from "../store/App.selectors";
import { useSelector } from "react-redux";

interface Props {
  children: React.ReactElement;
}

export default function Layout({ children }: Props) {
  const { darkMode } = useSelector(selectSettings);

  console.log("darkMode mui before", darkMode);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  console.log("darkMode mui", theme.palette.mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles mode={theme.palette.mode} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="bg-container super-container">
          <div className="bg-container2">{children}</div>
        </div>
      </div>
    </ThemeProvider>
  );
}
