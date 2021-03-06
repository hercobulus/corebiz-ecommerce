import React from "react";
import { Typography, Box, TextField, Button, Grid } from "@material-ui/core";
import { emailRegex } from "../../utils/validations";

const INITIAL_VALUE = { name: "", email: "" };

function Newsletter({ postNewsletter, clearNewsletter, subscribed }) {
  const [messages, setMessages] = React.useState({});
  const [user, setUser] = React.useState(INITIAL_VALUE);

  function handleSubmit() {
    if (validate()) {
      postNewsletter(user);
    }
  }

  function handleClickClear() {
    clearNewsletter();
    setUser(INITIAL_VALUE);
  }

  const validate = () => {
    let error = false;
    let messages = {};
    if (!user.name) {
      error = true;
      messages.name = "Preencha com seu nome completo.";
    }

    if (!user.email || !user.email.match(emailRegex)) {
      error = true;
      messages.email = "Preencha com um e-mail válido";
    }

    if (!error) {
      setMessages({});
    } else {
      setMessages(messages);
    }

    return !error;
  };

  return (
    <Box
      style={{
        backgroundColor: "#F2F2F2",
        paddingTop: "24px",
        paddingBottom: "24px",
      }}
    >
      {!subscribed ? (
        <>
          <Grid item xs={12}>
            <Typography
              style={{ fontWeight: 700, fontSize: "22px", textAlign: "center" }}
            >
              Participe de nossas news com promoções e novidades!
            </Typography>
          </Grid>
          <Grid
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            container
            direction={{ xs: "column", md: "row" }}
          >
            <TextField
              id="name"
              type="text"
              label="Digite seu nome"
              variant="outlined"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              value={user.name}
              error={!!messages.name}
              helperText={messages.name}
              sx={{ m: 1, minWidth: "260px", backgroundColor: "#FFFFFF" }}
            />

            <TextField
              id="email"
              type="text"
              label="Digite seu e-mail"
              variant="outlined"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              value={user.email}
              error={!!messages.email}
              helperText={messages.email}
              sx={{ m: 1, minWidth: "260px", backgroundColor: "#FFFFFF" }}
            />
            <Button
              style={{
                textTransform: "none",
                height: "56px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
              onClick={handleSubmit}
              variant="contained"
            >
              Eu quero!
            </Button>
          </Grid>
        </>
      ) : (
        <Box>
          <Typography
            style={{ fontWeight: 700, fontSize: "22px", textAlign: "center" }}
          >
            Participe de nossas news com promoções e novidades!
          </Typography>
          <Typography
            style={{ fontWeight: 400, fontSize: "12px", textAlign: "center" }}
          >
            A partir de agora você receberá as novidades e ofertas exclusivas.
          </Typography>
          <Box style={{ textAlign: "center", paddingTop: "15px" }}>
            <Button
              variant="contained"
              style={{
                textTransform: "none",
                height: "56px",
                paddingLeft: "40px",
                paddingRight: "40px",
              }}
              onClick={handleClickClear}
            >
              Cadastrar novo e-mail
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Newsletter;
