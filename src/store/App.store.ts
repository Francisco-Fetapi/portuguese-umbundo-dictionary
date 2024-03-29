import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { IWord } from "../database/IWord";
import useStatePersist from "../hooks/useStatePersist";
import {
  defaultOption1,
  defaultOption2,
  IFilterClassOption,
  IFilterExampleOptions,
  IOption,
} from "../pages/AdvancedSearch";

const SETTINGS_KEY = "settings";
const HISTORY_KEY = "history";
const FAVORITES_KEY = "favorites";

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
  searchResultsMain: IWord[];
  history: IWord[];
  favorites: IWord[];
  searchResultsSecondary: IWord[];
  classFilter: IOption<IFilterClassOption>;
  exampleFilter: IOption<IFilterExampleOptions>;
  searchTextSecondary: string;
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
  searchResultsMain: [],
  searchResultsSecondary: [],
  history: useStatePersist<IWord[]>(HISTORY_KEY).get() || [],
  favorites: useStatePersist<IWord[]>(FAVORITES_KEY).get() || [],
  classFilter: defaultOption1,
  exampleFilter: defaultOption2,
  searchTextSecondary: "",
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
        // if (!action.payload) {
        //   return;
        // }
        state.textToTranslate = action.payload;
      },
      setSearchResults(state, action: PayloadAction<IWord[]>) {
        state.searchResultsMain = action.payload;
      },
      setSearchResultsSecondary(state, action: PayloadAction<IWord[]>) {
        state.searchResultsSecondary = action.payload;
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
      addItemOnHistory(state, action: PayloadAction<IWord>) {
        const wordsOnHistory = state.history.map((item) => item.pt);
        if (wordsOnHistory.includes(action.payload.pt)) {
          return;
        }
        state.history.unshift(action.payload);
        const { save } = useStatePersist<IWord[]>(HISTORY_KEY);
        save(state.history);
      },
      addItemOnFavorites(state, action: PayloadAction<IWord>) {
        state.favorites.unshift(action.payload);
        const { save } = useStatePersist<IWord[]>(FAVORITES_KEY);
        save(state.favorites);
      },
      removeItemFromHistory(state, action: PayloadAction<IWord>) {
        state.history = state.history.filter(
          (item) => item?.pt.trim() !== action.payload?.pt.trim()
        );
        const { save } = useStatePersist<IWord[]>(HISTORY_KEY);
        save(state.history);
      },
      removeItemFromFavorites(state, action: PayloadAction<IWord>) {
        state.favorites = state.favorites.filter(
          (item) => item?.pt.trim() !== action.payload?.pt.trim()
        );
        const { save } = useStatePersist<IWord[]>(FAVORITES_KEY);
        save(state.favorites);
      },
      removeAllHistory(state) {
        state.history = [];
        const { save } = useStatePersist<IWord[]>(HISTORY_KEY);
        save(state.history);
      },
      setState(state, action: PayloadAction<Partial<App>>) {
        Object.assign(state, action.payload);
      },
      resetAdvancedSearch(state) {
        state.searchResultsSecondary = [];
        state.classFilter = defaultOption1;
        state.exampleFilter = defaultOption2;
        state.searchTextSecondary = "";
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
  setSearchResults,
  toggleLanguage,
  setMenu,
  setSettings,
  addItemOnFavorites,
  addItemOnHistory,
  removeItemFromFavorites,
  removeItemFromHistory,
  removeAllHistory,
  setSearchResultsSecondary,
  setState,
  resetAdvancedSearch,
} = app.actions;

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
