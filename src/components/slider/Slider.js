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
  boxImage: {
    position: "absolute",
    left: "120px",
    top: "60px",
  },
  textSup: {
    fontSize: "30px !important",
    lineHeight: "45px !important",
  },
  textBottom: {
    fontSize: "45px !important",
    fontWeight: "900 !important",
    lineHeight: "45px !important",
  },
  img: {
    width: "100%",
  },
}));
function Slider() {
  const classes = useStyles();
  const images = [
    {
      key: "1",
      src: "../../../images/slide01.png",
      alt: "Banner de promoção",
    },
    {
      key: "2",
      src: "../../../images/slide01.png",
      alt: "Banner de promoção",
    },
  ];
  return (
    <Box className={classes.box}>
      <Swiper pagination={true}>
        {images.map(({ src, alt, key }) => (
          <SwiperSlide key={key}>
            <Box className={classes.boxImage}>
              <Typography className={classes.textSup}>
                Olá, o que você está buscando?
              </Typography>
              <Typography className={classes.textBottom}>
                Criar ou migrar seu <br />
                e-commerce?
              </Typography>
            </Box>
            <img src={src} alt={alt} className={classes.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Slider;
