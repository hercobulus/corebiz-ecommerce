import React from "react";
import Product from "./Product";
import { Container, Typography, Grid } from "@material-ui/core";
import NavigateBefore from "@material-ui/icons/NavigateBefore";
import NavigateNext from "@material-ui/icons/NavigateNext";
import { makeStyles } from "@material-ui/styles";
import { Carousel } from "@trendyol-js/react-carousel";

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
    <Container style={{ paddingBottom: "70px" }}>
      <Grid className={classes.titleContent}>
        <Typography variant="h1" className={classes.title}>
          Mais Vendidos
        </Typography>
        <span className={classes.separator}></span>
      </Grid>
      <Grid className={classes.products}>
        <Carousel
          show={4}
          slide={4}
          swiping={true}
          //useArrowKeys={true}
          dynamic={true}
        >
          {products.map((product) => (
            <Product
              key={product.productId}
              product={product}
              leftArrom={<NavigateBefore />}
              rightArrow={<NavigateNext />}
            />
          ))}
        </Carousel>
      </Grid>
    </Container>
  );
}

export default Products;
