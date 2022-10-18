import { SnackbarProvider } from "notistack";
import Layout from "./core/mui";
import store from "./store/App.store";
import { Provider } from "react-redux";
import Routes from "./routes";
import { AppContainer } from "./styles/General";
import DatabaseProvider from "./contexts/DatabaseProvider";

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
