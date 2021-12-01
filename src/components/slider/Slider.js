import React from "react";
import { Box, Typography, Hidden } from "@material-ui/core";
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
    lineHeight: "45px !important",
  },
  textBottom: {
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
      srcDesktop: "../../../images/slide01.png",
      srcMobile: "../../../images/slide01mobile.png",
      alt: "Banner de promoção",
    },
    {
      key: "2",
      srcDesktop: "../../../images/slide01.png",
      srcMobile: "../../../images/slide01mobile.png",
      alt: "Banner de promoção",
    },
    {
      key: "3",
      srcDesktop: "../../../images/slide01.png",
      srcMobile: "../../../images/slide01mobile.png",
      alt: "Banner de promoção",
    },
    {
      key: "4",
      srcDesktop: "../../../images/slide01.png",
      srcMobile: "../../../images/slide01mobile.png",
      alt: "Banner de promoção",
    },
  ];
  return (
    <Box className={classes.box}>
      <Swiper pagination={true}>
        {images.map(({ srcDesktop, srcMobile, alt, key }) => (
          <SwiperSlide key={key}>
            <Box className={classes.boxImage}>
              <Typography
                className={classes.textSup}
                fontSize={{
                  md: "30px",
                  sm: "20px",
                  xs: "20px",
                }}
              >
                Olá, o que você está buscando?
              </Typography>
              <Typography
                className={classes.textBottom}
                fontSize={{
                  md: "45px",
                  sm: "30px",
                  xs: "30px",
                }}
              >
                Criar ou migrar seu <br />
                e-commerce?
              </Typography>
            </Box>
            <Hidden mdDown>
              <img src={srcDesktop} alt={alt} className={classes.img} />
            </Hidden>
            <Hidden mdUp>
              <img src={srcMobile} alt={alt} className={classes.img} />
            </Hidden>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Slider;
