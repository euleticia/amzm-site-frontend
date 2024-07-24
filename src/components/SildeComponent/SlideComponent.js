import React from 'react';
import Slider from 'react-slick';
import Image1 from '../../assets/amzm-logo.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './SlideComponent.css';
import { Box, Grid, Button, Typography } from '@mui/material';


const SlideItemComponent = (props) => {
  const { image, title, actions } = props;
  return (
    <div>
      <div className="image-slide">
        <Box className="mask" sx={{ p: 5 }}>
          <Grid container justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
            <Grid item xs={12} textAlign="center">
              <Typography
                fontFamily={'Roboto'}
                textAlign={'center'}
                component="div"
                sx={{
                  fontSize: {
                    md: 50,
                    xs: 20
                  },
                  color: '#fff',
                  fontWeight: 400,
                  maxWidth: '100%'
                }}
              >
                {title}
              </Typography>
              <Box sx={{ mt: 4 }}>
                {actions}
              </Box>
            </Grid>
          </Grid>
        </Box>
        <img
          src={image}
          alt={title}
          className="slide-image"
        />
      </div>
    </div>
  );
}

const SlideComponent = () => {
  const settings = {
    infinite: false,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    autoplay: false,
    nextArrow: <></>,
    prevArrow: <></>,
    customPaging: function (i) {
      return (
        <Button>
          {i + 1}
        </Button>
      );
    },
    dots: false,
  };

  return (
    <Box>
      <Slider {...settings}>
        <SlideItemComponent
          image={Image1}
        />
      </Slider>
    </Box>
  );
};

export default SlideComponent;
