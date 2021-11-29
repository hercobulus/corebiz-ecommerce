import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { Header } from "./components";
import HomePage from "./views/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<HomePage />} path="/" />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
