import { RootState } from "./App.store";

export const selectTheme = (state: RootState) => state.app.darkMode;

export const selectTextToTranslate = (state: RootState) =>
  state.app.textToTranslate;

export const selectTextTranslated = (state: RootState) =>
  state.app.textTranslated;

export const selectLanguagesPositions = (state: RootState) =>
  state.app.languages;
export const selectMenu = (state: RootState) => state.app.menu;
