import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FFFFFF",
    },
    notification: {
      main: "#F8475F",
    },
  },
  typography: {
    fontFamily: "Nunito, Arial",
  },
});

export default theme;
