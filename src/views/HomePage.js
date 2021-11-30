import React from "react";
import { Box, Container, Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Slider, Products } from "../components";
import axios from "axios";
import { ReactComponent as Star } from "../assets/star.svg";
import { ReactComponent as StarAvoid } from "../assets/star_avoid.svg";

function HomePage() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(async () => {
    const response = await axios.get(
      "https://corebiz-test.herokuapp.com/api/v1/products"
    );
    setProducts(response.data);
  }, []);

  return (
    <>
      <Slider />
      <Products products={products} />
    </>
  );
}

export default HomePage;
