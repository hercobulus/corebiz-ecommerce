import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  Button,
} from "@material-ui/core";
function Newsletter() {
  return (
    <Box
      style={{
        backgroundColor: "#F2F2F2",
        paddingTop: "24px",
        paddingBottom: "24px",
      }}
    >
      <Typography
        style={{ fontWeight: 700, fontSize: "22px", textAlign: "center" }}
      >
        Participe de nossas news com promoções e novidades!
      </Typography>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          id="name"
          label="Digite seu nome"
          variant="outlined"
          sx={{ m: 1, minWidth: "260px", backgroundColor: "#FFFFFF" }}
        />
        <TextField
          id="email"
          label="Digite seu e-mail"
          variant="outlined"
          sx={{ m: 1, minWidth: "260px", backgroundColor: "#FFFFFF" }}
        />
        <Button
          style={{
            textTransform: "none",
            height: "56px",
            paddingLeft: "40px",
            paddingRight: "40px",
          }}
          variant="contained"
        >
          Eu quero!
        </Button>
      </form>
    </Box>
  );
}

export default Newsletter;
