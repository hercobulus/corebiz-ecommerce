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
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Search from "@material-ui/icons/Search";
import Person from "@material-ui/icons/PersonOutline";
import Menu from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import React from "react";
import { ReactComponent as CorebizLogo } from "../../assets/corebiz.svg";
import { ReactComponent as Cart } from "../../assets/cart.svg";

const useStyles = makeStyles((theme) => ({
  appbar: {
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
  const classes = useStyles();
  return (
    <Box>
      <AppBar
        elevation={0}
        className={classes.appbar}
        style={{ background: "#FFF" }}
        height={{ md: "80" }}
      >
        <Container>
          <Toolbar className={classes.tollbar}>
            <Hidden mdUp>
              <Grid item xs={3}>
                <IconButton>
                  <Menu />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs={9} md={3}>
              <Link to="/">
                <CorebizLogo className={classes.logo} />
              </Link>
            </Grid>
            <Hidden mdDown>
              <Grid item xs={6}>
                <SearchBar />
              </Grid>
            </Hidden>
            <Grid
              item
              xs={3}
              md={3}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Hidden mdDown>
                <Link to="/account" className={classes.link}>
                  <Person style={{ color: "#000" }} /> Minha conta
                </Link>
              </Hidden>
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
          <Hidden mdUp>
            <Grid
              item
              xs={12}
              style={{
                paddingBottom: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SearchBar />
            </Grid>
          </Hidden>
        </Container>
      </AppBar>
    </Box>
  );
}

function SearchBar() {
  const [search, setSearch] = React.useState("");
  const classes = useStyles();
  return (
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
  );
}

export default HomePage;
