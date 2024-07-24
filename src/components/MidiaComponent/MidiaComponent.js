import React, { Fragment, useState } from 'react';
import TitlePageComponent from '../Titles/TitlePageComponent';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './MidiaComponent.css';

import image1 from '../../assets/galeria/intro1.jpeg';
import image2 from '../../assets/galeria/intro2.jpeg';
import image3 from '../../assets/galeria/intro3.jpeg';
import image4 from '../../assets/galeria/intro4.jpeg';
import image5 from '../../assets/galeria/intro5.jpeg';
import { Box, Button, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const images = [
  {
    id: 1,
    src: image1,
    caption: 'legenda',
    isLink: true,
  },
  {
    id: 2,
    src: image2,
    caption: 'legenda',
  },
  {
    id: 3,
    src: image3,
    caption: 'legenda',
  },
  {
    id: 4,
    src: image4,
    caption: 'legenda',
  },
  {
    id: 5,
    src: image5,
    caption: 'legenda',
  },
];

const MidiaComponent = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const handleImageClick = (image) => {
    setExpandedImage(image.src);
  };

  const handleCloseExpandedImage = () => {
    setExpandedImage(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    nextArrow:
      <Box
        sx={{
          display: {
            md: 'block !important',
            sm: 'none !important',
            xs: 'none !important'
          }
        }}
      >
        <Button variant="outlined" sx={{ borderRadius: 15, px: 1, py: 1 }}>
          <NavigateNextIcon />
        </Button>
      </Box>
    ,
    prevArrow:
      <Box
        sx={{
          display: {
            md: 'block !important',
            sm: 'none !important',
            xs: 'none !important'
          }
        }}
      >
        <Button variant="outlined" sx={{ borderRadius: 15, px: 1, py: 1, ml: -5.5 }}>
          <NavigateBeforeIcon />
        </Button>
      </Box>
    ,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  };

  return (
    <div>
      <TitlePageComponent title="Portifólio" />
      <Container maxWidth={'md'} sx={{ mb: 8, borderRadius: 15 }}>
        <Slider style={{ marginTop: '60px' }} {...settings}>
          {
            images.map((image) => {

              return (
                <Fragment key={image.id}>
                  <Card sx={{ mx: 1, mb: 1, borderRadius: 5 }}>
                    <CardMedia
                      sx={{ height: 300, cursor: 'pointer' }}
                      image={image.src}
                      title="green iguana"
                      onClick={() => {
                        if (image.isLink) {
                          window.open(image.url, '_blank')
                        } else {
                          handleImageClick(image)
                        }
                      }}
                    />
                    <CardContent sx={{ backgroundColor: '#f0f0f0', textAlign: 'center' }}>
                      <Typography gutterBottom variant="h5" component="div" fontSize={'16px'} fontFamily={'Fredoka One'}>
                        {image.caption}
                      </Typography>
                    </CardContent>
                  </Card>
                </Fragment>
              )
            })
          }
        </Slider>
      </Container>

      {expandedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1101
          }}
          onClick={handleCloseExpandedImage}
        >
          <div style={{ maxWidth: '90%', maxHeight: '90%' }}>
            <img src={expandedImage} alt="Imagem expandida" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MidiaComponent;
