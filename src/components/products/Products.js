import React from "react";
import Product from "./Product";
import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "900 !important",
    fontSize: "20px !important",
  },
  separator: {
    width: "65px",
    display: "table",
    height: "5px",
    backgroundColor: "#c0c0c0",
  },
  titleContent: {
    paddingTop: "25px",
  },
  products: {
    display: "flex",
    paddingTop: "20px",
    justifyContent: "space-between",
  },
}));

function Products({ products }) {
  const classes = useStyles();
  return (
    <Container>
      <Grid className={classes.titleContent}>
        <Typography variant="h1" className={classes.title}>
          Mais Vendidos
        </Typography>
        <span className={classes.separator}></span>
      </Grid>
      <Grid className={classes.products}>
        {products.map((product) => (
          <Product product={product} />
        ))}
      </Grid>
    </Container>
  );
}

export default Products;
