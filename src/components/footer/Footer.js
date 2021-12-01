import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ReactComponent as Email } from "../../assets/email.svg";
import { ReactComponent as Phone } from "../../assets/phone.svg";
import { ReactComponent as Corebiz } from "../../assets/logoCorebizfooter.svg";
import { ReactComponent as Powered } from "../../assets/poweredby.svg";
import { ReactComponent as Created } from "../../assets/createdby.svg";

const useStyles = makeStyles((theme) => ({
  separator: {
    marginTop: "16px",
    width: "45px",
    display: "table",
    height: "5px",
    backgroundColor: "#fff",
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Box
      style={{ backgroundColor: "#000", color: "white", paddingTop: "25px" }}
    >
      <Container>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={4}>
            <Typography style={{ fontSize: "20px", fontWeight: 700 }}>
              Localização
            </Typography>
            <span className={classes.separator}></span>
            <List>
              <ListItem>
                <ListItemText primary="Avenida Andrômeda, 2000. Bloco 6 e 8" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Alphavile SP" />
              </ListItem>
              <ListItem>
                <ListItemText primary="brasil@corebiz.ag" />
              </ListItem>
              <ListItem>
                <ListItemText primary="+55 11 3090 1039" />
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <ButtonWhite icon={<Email />}>Entre em contato</ButtonWhite>
            <ButtonWhite icon={<Phone />}>
              Fale com o nosso <br />
              consultor online
            </ButtonWhite>
          </Grid>
          <Grid item xs={4} display="flex" flexDirection="row">
            <Box display="flex" flexDirection="column">
              <Created />
              <Corebiz />
            </Box>
            <Box>
              <Powered />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Grid style={{ backgroundColor: "#C0C0C0", height: "10px" }}></Grid>
    </Box>
  );
}

export default Footer;

function ButtonWhite({ icon, children }) {
  return (
    <Button
      variant="contained"
      color="secondary"
      startIcon={icon}
      style={{
        fontSize: "12px",
        fontWeight: 600,
        maxWidth: "190px",
        lineHeight: "12px",
        marginTop: "25px",
      }}
    >
      {children}
    </Button>
  );
}
