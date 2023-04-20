import { SnackbarProvider } from "notistack";
import Layout from "./core/mui";
import store from "./store/App.store";
import { Provider } from "react-redux";
import Routes from "./routes";
import { AppContainer } from "./styles/General";
import LocalDatabaseProvider from "./contexts/DatabaseProvider";
// import FirebaseProvider from "./contexts/FireBaseProvider";

const databases = {
  development: LocalDatabaseProvider,
  // production: FirebaseProvider,
};

const environment = navigator.onLine ? "production" : "development";
// const DatabaseProvider = databases[environment];
const DatabaseProvider = databases["development"];

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
