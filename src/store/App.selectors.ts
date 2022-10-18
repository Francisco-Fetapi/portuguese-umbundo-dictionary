import { RootState } from "./App.store";

export const selectSettings = (state: RootState) => state.app.settings;

export const selectTextToTranslate = (state: RootState) =>
  state.app.textToTranslate;

export const selectLanguagesPositions = (state: RootState) =>
  state.app.languages;
export const selectMenu = (state: RootState) => state.app.menu;
