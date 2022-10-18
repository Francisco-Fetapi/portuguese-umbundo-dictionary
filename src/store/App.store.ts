import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
// import { IWord } from "../database/IWord";
import useStatePersist from "../hooks/useStatePersist";

const SETTINGS_KEY = "settings";

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
  languages: {
    from: Language;
    to: Language;
  };
  menu: boolean;
}

const InitialSettings: Settings = {
  appLanguage: "Português",
  automaticSearch: true,
  darkMode: false,
  saveHistory: true,
};

const initialState: App = {
  settings: useStatePersist<Settings>(SETTINGS_KEY).get() || InitialSettings,
  textToTranslate: "",
  languages: {
    from: "Português",
    to: "Umbundo",
  },
  menu: false,
};

function stateReseted(initialState: App): App {
  const settings =
    useStatePersist<Settings>(SETTINGS_KEY).get() || InitialSettings;
  return {
    ...initialState,
    settings,
  };
}

export function sliceCreator(initialState: App) {
  return createSlice({
    name: "app",
    initialState,
    reducers: {
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
        const newSettings = Object.assign(state.settings, action.payload);
        const { save } = useStatePersist<Settings>(SETTINGS_KEY);
        save(newSettings);
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
