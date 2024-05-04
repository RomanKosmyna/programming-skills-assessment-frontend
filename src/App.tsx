import { Outlet } from "react-router-dom";
import { AppProvider } from "./providers/app";
import { UserProvider } from "./providers/useAuth";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <AppProvider>
          <UserProvider>
            <Outlet />
          </UserProvider>
        </AppProvider>
      </Provider>
    </>
  )
}

export default App;