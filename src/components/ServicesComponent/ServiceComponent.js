import React, { useState } from 'react';
import { Box, Grid, Typography, styled, Modal } from '@mui/material';
import TitlePageComponent from '../Titles/TitlePageComponent';
import Image1 from "../../assets/galeria/intro3.jpeg";
import Image2 from "../../assets/galeria/intro7.jpeg";
import Image3 from "../../assets/corrimao1.jpeg";
import Image4 from "../../assets/galeria/intro8.jpg";
import Image5 from "../../assets/galeria/intro9.jpeg";
import Image6 from "../../assets/galeria/intro10.jpeg";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const services = [
  {
    title: "Guarda corpo 2 polegadas com barras de 5/8 em alumínio branco/preto",
    image: Image1
  },
  {
    title: "Corrimão de 2 polegadas, com barra de 1 polegada em alumínio ou inox, preto ou branco",
    image: Image2
  },
  {
    title: "Guarda corpo 2 polegadas em alumínio branco/preto/inox com vidro 8mm verde/incolor/fumê",
    image: Image3
  },
  {
    title: "Corrimão de parede 2 polegadas alumínio branco/preto/inox",
    image: Image4
  },
  {
    title: "Corrimão de parede 1.1/2 alumínio branco/preto/inox simples e duplo",
    image: Image5
  },
  {
    title: "Corrimão de parede chato alumínio branco/preto",
    image: Image6
  }
];

const ServiceCard = styled(Box)(({ theme }) => ({
  border: '1px solid #ddd',
  borderRadius: 8,
  padding: 16,
  margin: 16,
  background: 'linear-gradient(135deg, #ebebeb 0%, #989898 100%)',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  }
}));

const ServiceTitle = styled(Typography)({
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 8
});

const ServiceImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: 8,
  cursor: 'pointer',
  marginBottom: 8
});

const ServicesComponent = () => {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = services.map(service => ({
    original: service.image,
    thumbnail: service.image,
    description: service.title,
  }));

  const handleOpen = (index) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <TitlePageComponent title="Nossos Produtos" />
      <Grid container spacing={2}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceCard>
              <ServiceImage
                src={service.image}
                alt={service.title}
                onClick={() => handleOpen(index)}
              />
              <ServiceTitle>{service.title}</ServiceTitle>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ maxWidth: '80%', maxHeight: '80%', margin: 'auto', marginTop: '5%', outline: 'none' }}>
          <ImageGallery items={images} startIndex={selectedIndex} showThumbnails={true} />
        </Box>
      </Modal>
    </Box>
  );
};

export default ServicesComponent;
