import React from 'react';
import { Box, Grid, Typography, styled, Button } from '@mui/material';
import AboutUsImage from '../../assets/logo.png'

const AboutUsContainer = styled(Box)(({ theme }) => ({
  padding: '40px 20px',
  textAlign: 'center',
  backgroundColor: '#f7f7f7',
  [theme.breakpoints.down('sm')]: {
    padding: '20px 10px',
  },
}));

const AboutUsTitle = styled(Typography)(({ theme }) => ({
  fontSize: '36px',
  fontFamily: 'Prompt',
  fontWeight: '600',
  marginBottom: '20px',
  color: '#00000',
  [theme.breakpoints.down('sm')]: {
    fontSize: '28px',
  },
}));

const AboutUsText = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  lineHeight: '1.6',
  color: '#555',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
}));

const AboutUsImageWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '20px',
  },
}));

const WhatsAppButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#25D366',
  color: '#fff',
  borderRadius: '8px',
  padding: '10px 20px',
  marginTop: '20px',
  '&:hover': {
    backgroundColor: '#1EBE3F',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    padding: '8px 16px',
  },
}));

const AboutUsComponent = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890', '_blank'); 
  };


  return (
    <AboutUsContainer>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box>
            <AboutUsTitle>Quem Somos?</AboutUsTitle>
            <AboutUsText>
              Somos uma empresa dedicada a fornecer soluções de alta qualidade em corrimãos e guarda-corpos.
              Com 20 anos de experiência, nossa missão é garantir segurança e estilo em cada projeto que
              realizamos. Nosso compromisso com a excelência nos tornou líderes de mercado e nossa paixão
              por inovação nos mantém na vanguarda da indústria.
            </AboutUsText>
            <WhatsAppButton onClick={handleWhatsAppClick}>
              Fale Conosco no WhatsApp
            </WhatsAppButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <AboutUsImageWrapper>
            <img src={AboutUsImage} alt="About Us" style={{ width: '100%', borderRadius: '8px' }} />
          </AboutUsImageWrapper>
        </Grid>
      </Grid>
    </AboutUsContainer>
  );
};

export default AboutUsComponent;