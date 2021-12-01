import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import thunk from "redux-thunk";
import theme from "./theme";
import { Header, Footer } from "./components";
import HomePage from "./views/Home/HomePage";
import CartPage from "./views/Cart/CartPage";
import AccountsPage from "./views/Account/AccountsPage";
import reducer from "./reducers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<CartPage />} path="/cart" />
            <Route element={<AccountsPage />} path="/account" />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
