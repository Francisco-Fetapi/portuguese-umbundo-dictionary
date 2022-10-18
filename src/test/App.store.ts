import { configureStore } from "@reduxjs/toolkit";
import { App, middlewares, sliceCreator } from "../store/App.store";

const initialState: App = {
  settings: {
    darkMode: false,
    automaticSearch: true,
    saveHistory: true,
    appLanguage: "Português",
  },
  textToTranslate: "",
  languages: {
    from: "Português",
    to: "Umbundo",
  },
  menu: false,
  searchResultsMain: [],
};

const app = sliceCreator(initialState);

export const store = configureStore({
  reducer: {
    app: app.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewares),
});

export default store;
