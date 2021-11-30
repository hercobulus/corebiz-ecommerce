import React from "react";
import { Slider, Products, Newsletter } from "../components";
import axios from "axios";

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
      <Newsletter />
    </>
  );
}

export default HomePage;
