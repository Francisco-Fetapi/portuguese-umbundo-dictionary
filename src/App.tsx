import { SnackbarProvider } from "notistack";
import Layout from "./core/mui";
import store from "./store/App.store";
import { Provider } from "react-redux";
import Routes from "./routes";
import { AppContainer } from "./styles/General";
import LocalDatabaseProvider from "./contexts/DatabaseProvider";
import FirebaseProvider from "./contexts/FireBaseProvider";

const databases = {
  development: LocalDatabaseProvider,
  production: FirebaseProvider,
  test: LocalDatabaseProvider,
};

type Envs = keyof typeof databases;
let url = new URLSearchParams(window.location.search);
let forceOfflineMode: string | null = null;

if (url) {
  forceOfflineMode = url.get("local");
}

let environment: Envs = navigator.onLine ? "production" : "development";
if (forceOfflineMode) {
  environment = "test";
}
// const DatabaseProvider = databases[environment];

const DatabaseProvider = databases.test;

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <SnackbarProvider maxSnack={3}>
          <AppContainer>
            <DatabaseProvider>
              <Routes />
            </DatabaseProvider>
          </AppContainer>
        </SnackbarProvider>
      </Layout>
    </Provider>
  );
}

export default App;
