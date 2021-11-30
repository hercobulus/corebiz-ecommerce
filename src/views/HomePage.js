import React from "react";
import { Box, Container, Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Slider } from "../components";
import axios from "axios";
import { ReactComponent as Star } from "../assets/star.svg";
import { ReactComponent as StarAvoid } from "../assets/star_avoid.svg";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    marginTop: 80,
    backgroundColor: "#000",
    color: "#FFF",
    marginLeft: "0px",
    marginRight: "0px",
  },
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
  product: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#E6E8EA",
    },
  },
}));

const format = (number) => {
  return (number / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

function HomePage() {
  const classes = useStyles();
  const [products, setProducts] = React.useState([]);
  React.useEffect(async () => {
    const response = await axios.get(
      "https://corebiz-test.herokuapp.com/api/v1/products"
    );
    setProducts(response.data);
    console.log(response.data);
  }, []);

  return (
    <>
      <Slider />
      <Container>
        <Grid className={classes.titleContent}>
          <Typography variant="h1" className={classes.title}>
            Mais Vendidos
          </Typography>
          <span className={classes.separator}></span>
        </Grid>
        <Grid className={classes.products}>
          {products.map(
            ({
              productId,
              productName,
              price,
              imageUrl,
              stars,
              installments,
              listPrice,
            }) => (
              <Box className={classes.product} key={productId}>
                <img src={imageUrl} alt={productName} />
                <Box>
                  <Typography
                    variant="body1"
                    color="initial"
                    style={{
                      fontWeight: 600,
                      fontSize: "12px",
                      textAlign: "center",
                      color: "#7A7A7A",
                      padding: "7px 0",
                    }}
                  >
                    {productName}
                  </Typography>
                  <Box style={{ textAlign: "center", paddingBottom: "20px" }}>
                    {Array.from(Array(5)).map((r, index) => {
                      return index < stars ? <Star /> : <StarAvoid />;
                    })}
                  </Box>
                  {listPrice && (
                    <Typography
                      style={{
                        textAlign: "center",
                        fontWeight: 400,
                        color: "#7A7A7A",
                        fontSize: "11px",
                      }}
                    >
                      de {format(listPrice)}
                    </Typography>
                  )}
                  <Typography
                    variant="body1"
                    color="initial"
                    style={{
                      fontSize: "18px",
                      textAlign: "center",
                      fontWeight: 700,
                    }}
                  >
                    por {format(price)}
                  </Typography>
                  {installments[0] && (
                    <Typography
                      style={{
                        textAlign: "center",
                        fontWeight: 400,
                        color: "#7A7A7A",
                        fontSize: "11px",
                      }}
                    >
                      ou em {installments[0].quantity}x de
                      {format(installments[0].value)}
                    </Typography>
                  )}
                  <Box style={{ textAlign: "center", paddingTop: "8px" }}>
                    <Button variant="contained">Comprar</Button>
                  </Box>
                </Box>
              </Box>
            )
          )}
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;
