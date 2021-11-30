import {
  AppBar,
  IconButton,
  Toolbar,
  FormControl,
  InputAdornment,
  InputLabel,
  Input,
  Grid,
  Container,
  Badge,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Search from "@material-ui/icons/Search";
import Person from "@material-ui/icons/PersonOutline";
import { Link } from "react-router-dom";
import React from "react";
import { ReactComponent as CorebizLogo } from "../../assets/corebiz.svg";
import { ReactComponent as Cart } from "../../assets/cart.svg";

const useStyles = makeStyles((theme) => ({
  appbar: {
    height: "80px",
    justifyContent: "center",
    background: "#FFF",
  },
  logo: {
    width: "auto",
    maxHeight: "41px",
  },
  tollbar: {
    justifyContent: "space-around",
  },
  formcontrol: {
    width: "90%",
  },
  badge: {
    backgroundColor: "#F8475F",
    color: "white",
  },
  link: {
    display: "flex",
    justifyContent: "start",
    alignItems: "space-between",
    color: "#7A7A7A",
    textDecoration: "none",
    fontSize: "20px",
    "&:hover": {
      color: "#222",
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
}));

function HomePage() {
  const [search, setSearch] = React.useState("");
  const classes = useStyles();
  return (
    <Box>
      <AppBar
        elevation={0}
        className={classes.appbar}
        style={{ background: "#FFF" }}
      >
        <Container>
          <Toolbar className={classes.tollbar}>
            <Grid item xs={3}>
              <Link to="/">
                <CorebizLogo className={classes.logo} />
              </Link>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formcontrol} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  O que está procurando?
                </InputLabel>
                <Input
                  id="search"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="O que está procurando?"
                        onClick={() => {}}
                        onMouseDown={() => {}}
                      >
                        <Search />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid
              item
              xs={3}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Link to="/account" className={classes.link}>
                <Person style={{ color: "#000" }} /> Minha conta
              </Link>
              <Link to="/cart" className={classes.link}>
                <Badge
                  badgeContent={0}
                  classes={{ badge: classes.badge }}
                  showZero
                >
                  <Cart />
                </Badge>
              </Link>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default HomePage;
