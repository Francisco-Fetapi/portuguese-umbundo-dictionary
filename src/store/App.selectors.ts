import { ShortLanguage } from "../components/LanguageToggle";
import { RootState } from "./App.store";

type ILanguageShort = "pt" | "um";

export const selectSettings = (state: RootState) => state.app.settings;

export const selectTextToTranslate = (state: RootState) =>
  state.app.textToTranslate;
export const selectSearchResults = (state: RootState) =>
  state.app.searchResultsMain;
export const selectSearchResultsSecondary = (state: RootState) =>
  state.app.searchResultsSecondary;

export const selectLanguagesPositions = (state: RootState) =>
  state.app.languages;
export const selectShortLanguageChoosed = (state: RootState) => {
  const { from, to } = state.app.languages;
  const languagesShortMap: ShortLanguage = {
    Português: "pt",
    Umbundo: "um",
  };
  return [languagesShortMap[from], languagesShortMap[to]] as [
    ILanguageShort,
    ILanguageShort
  ];
};

export const selectMenu = (state: RootState) => state.app.menu;

export const selectFavorites = (state: RootState) => state.app.favorites;
export const selectHistory = (state: RootState) => state.app.history;
export const selectAdvancedSearchFilters = (state: RootState) => {
  return {
    classFilter: state.app.classFilter,
    exampleFilter: state.app.exampleFilter,
    searchTextSecondary: state.app.searchTextSecondary,
  };
};
