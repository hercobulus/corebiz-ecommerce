import { Box, Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import React from "react";

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: 80,
    backgroundColor: "#000",
    color: "#FFF",
  },
}));

function HomePage() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Container>
        <Grid item xs={6}>
          <Typography>Olá, o que você está buscando?</Typography>
          <Typography>Criar ou migrar seu e-commerce?</Typography>
        </Grid>
        <Grid item xs={6}>
          <img src="../../images/banner.png" alt="Banner" />
        </Grid>
      </Container>
    </Box>
  );
}

export default HomePage;
