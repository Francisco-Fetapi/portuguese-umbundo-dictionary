import { RootState } from "./App.store";

export const selectSettings = (state: RootState) => state.app.settings;

export const selectTextToTranslate = (state: RootState) =>
  state.app.textToTranslate;
export const selectSearchResults = (state: RootState) =>
  state.app.searchResultsMain;
export const selectSearchResultsSecondary = (state: RootState) =>
  state.app.searchResultsSecondary;

export const selectLanguagesPositions = (state: RootState) =>
  state.app.languages;
export const selectMenu = (state: RootState) => state.app.menu;

export const selectFavorites = (state: RootState) => state.app.favorites;
export const selectHistory = (state: RootState) => state.app.history;
export const selectDictionaryFilters = (state: RootState) => {
  return {
    classFilter: state.app.classFilter,
    exampleFilter: state.app.exampleFilter,
    searchTextSecondary: state.app.searchTextSecondary,
  };
};
