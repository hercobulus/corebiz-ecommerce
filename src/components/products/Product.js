import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as StarAvoid } from "../../assets/star_avoid.svg";

const useStyles = makeStyles((theme) => ({
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

function Product({ product }) {
  const {
    productId,
    productName,
    price,
    imageUrl,
    stars,
    installments,
    listPrice,
  } = product;

  const classes = useStyles();

  return (
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
  );
}

export default Product;
