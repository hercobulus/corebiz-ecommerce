import React from "react";
import { Box, Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Slider } from "../components";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    marginTop: 80,
    backgroundColor: "#000",
    color: "#FFF",
    marginLeft: "0px",
    marginRight: "0px",
  },
}));

function HomePage() {
  const classes = useStyles();

  return <Slider />;
}

export default HomePage;
