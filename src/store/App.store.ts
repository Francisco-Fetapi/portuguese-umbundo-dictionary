import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import useStatePersist from "../hooks/useStatePersist";

export const THEME_KEY_IN_LOCALSTORAGE = "darkMode";

export interface IDarkMode {
  darkMode: boolean;
}

type Language = "portugues" | "umbundo";
export interface App extends IDarkMode {
  textToTranslate: string;
  textTranslated: string;
  languages: {
    from: Language;
    to: Language;
  };
}

const initialState: App = {
  darkMode: useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE).get(),
  textToTranslate: "",
  textTranslated: "Aqui irá aparecer o texto traduzido",
  languages: {
    from: "portugues",
    to: "umbundo",
  },
};

function stateReseted(initialState: App): App {
  const darkMode = useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE).get();
  return { ...initialState, darkMode };
}

export function sliceCreator(initialState: App) {
  return createSlice({
    name: "app",
    initialState,
    reducers: {
      toggleTheme(state) {
        state.darkMode = !state.darkMode;
        const { save } = useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE);
        save(state.darkMode);
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
} = app.actions;

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
