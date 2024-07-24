import React, { useState } from 'react';
import Slider from 'react-slick';
import './Galeria.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image1 from "../../assets/galeria/intro4.jpeg"
import Image2 from "../../assets/galeria/intro4.jpeg"
import Image3 from "../../assets/galeria/intro4.jpeg"
import Image4 from "../../assets/galeria/intro4.jpeg"
import Image5 from "../../assets/galeria/intro4.jpeg"
import Image6 from "../../assets/galeria/intro4.jpeg"

const images = [
  {
    id: 1,
    src: Image1,
  },
  {
    id: 2,
    src: Image2,
  },
  {
    id: 3,
    src: Image3,
  },
  {
    id: 4,
    src: Image4,
  },
  {
    id: 5,
    src: Image5,
  },
  {
    id: 6,
    src: Image6,
  },
];

const GaleriaComponent = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const handleImageClick = (image) => {
    setExpandedImage(image.src);
  };

  const handleCloseExpandedImage = () => {
    setExpandedImage(null);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    className: 'custom-slide',
    nextArrow: <></>,
    prevArrow: <></>,
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
      <div
        style={{
          backgroundColor: "#fcf9f4",
          padding: "40px",
          marginBottom: "20px",
        }}
      >
        <h3
          style={{
            fontFamily: "Prompt",
            textAlign: "center",
            marginBottom: "1px",
            color: "#000000",
            fontSize: "36px",
          }}
        >
          Galeria de Imagem
        </h3>
      </div>
      <Slider style={{ marginTop: '60px' }} {...settings}>
        {images.map((image) => (
          <div key={image.id} style={{ marginBottom: '10px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <div
              style={{
                cursor: 'pointer',
                overflow: 'hidden',
                borderRadius: '10px 10px 0 0',
              }}
              onClick={() => handleImageClick(image)}
            >
              <img src={image.src} alt={`Imagem ${image.id}`} style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        ))}
      </Slider>

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

export default GaleriaComponent;
