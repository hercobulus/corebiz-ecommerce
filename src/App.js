import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { Header, Footer } from "./components";
import HomePage from "./views/HomePage";
import CartPage from "./views/CartPage";
import AccountsPage from "./views/AccountsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
