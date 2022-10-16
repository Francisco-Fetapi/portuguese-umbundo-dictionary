import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import useStatePersist from "../hooks/useStatePersist";

export const THEME_KEY = "darkMode";
export const AUTOMATIC_SEARCH_KEY = "automaticSearch";
export const SAVE_HISTORY_KEY = "saveHistory";
export const APP_LANGUAGE_KEY = "appLanguage";

export interface IDarkMode {
  darkMode: boolean;
}

export interface Settings extends IDarkMode {
  automaticSearch: boolean;
  saveHistory: boolean;
  appLanguage: Language;
}

type Language = "Português" | "Umbundo";
export interface App {
  settings: Settings;
  textToTranslate: string;
  textTranslated: string;
  languages: {
    from: Language;
    to: Language;
  };
  menu: boolean;
}

const initialState: App = {
  settings: {
    darkMode: useStatePersist<boolean>(THEME_KEY).get(),
    automaticSearch: useStatePersist<boolean>(AUTOMATIC_SEARCH_KEY).get(),
    saveHistory: useStatePersist<boolean>(SAVE_HISTORY_KEY).get(),
    appLanguage:
      useStatePersist<Language>(APP_LANGUAGE_KEY).get() || "Português",
  },
  textToTranslate: "",
  textTranslated: "Aqui irão aparecer os resultados",
  languages: {
    from: "Português",
    to: "Umbundo",
  },
  menu: false,
};

function stateReseted(initialState: App): App {
  const darkMode = useStatePersist<boolean>(THEME_KEY).get();
  const automaticSearch = useStatePersist<boolean>(AUTOMATIC_SEARCH_KEY).get();
  const saveHistory = useStatePersist<boolean>(SAVE_HISTORY_KEY).get();
  const appLanguage =
    useStatePersist<Language>(APP_LANGUAGE_KEY).get() || "Português";
  return {
    ...initialState,
    settings: { darkMode, automaticSearch, saveHistory, appLanguage },
  };
}

export function sliceCreator(initialState: App) {
  return createSlice({
    name: "app",
    initialState,
    reducers: {
      toggleTheme(state) {
        state.settings.darkMode = !state.settings.darkMode;
        const { save } = useStatePersist<boolean>(THEME_KEY);
        save(state.settings.darkMode);
      },
      resetAllState(state, action: PayloadAction<boolean | undefined>) {
        if (action.payload) {
          return Object.assign(state, initialState);
        }
        Object.assign(state, stateReseted(initialState));
      },
      setTextToTranslate(state, action: PayloadAction<string>) {
        state.textToTranslate = action.payload;
      },
      setTextTranslated(state, action: PayloadAction<string>) {
        state.textToTranslate = action.payload;
      },
      toggleLanguage(state) {
        const lastFrom = state.languages.from;
        state.languages.from = state.languages.to;
        state.languages.to = lastFrom;
      },
      setMenu(state, action: PayloadAction<boolean>) {
        state.menu = action.payload;
      },
      setSettings(state, action: PayloadAction<Partial<Settings>>) {
        Object.assign(state.settings, action.payload);
      },
    },
  });
}

export const app = sliceCreator(initialState);

export const middlewares = {
  serializableCheck: {
    // Ignore these paths in the state
    ignoredPaths: [],
  },
};
export const store = configureStore({
  reducer: {
    app: app.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewares),
});

export const {
  toggleTheme,
  resetAllState,
  setTextToTranslate,
  setTextTranslated,
  toggleLanguage,
  setMenu,
  setSettings,
} = app.actions;

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
