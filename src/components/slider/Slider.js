import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);
const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    position: "relative",
    marginTop: 80,
    backgroundColor: "#000",
    color: "#FFF",
    marginLeft: "0px",
    marginRight: "0px",
  },
}));
function Slider() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Swiper pagination={true}>
        {[0, 1, 2, 3, 4].map((slide) => (
          <SwiperSlide>
            <Box style={{ position: "absolute", left: "120px", top: "60px" }}>
              <Typography
                style={{
                  fontSize: "30px",
                  lineHeight: "45px",
                }}
              >
                Olá, o que você está buscando?
              </Typography>
              <Typography
                style={{
                  fontSize: "45px",
                  fontWeight: "900",
                  lineHeight: "45px",
                }}
              >
                Criar ou migrar seu <br />
                e-commerce?
              </Typography>
            </Box>
            <img
              src="../../../images/slide01.png"
              alt="Banner de promoção"
              style={{ width: "100%" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Slider;
