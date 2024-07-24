import React from 'react';
import { Box, Grid, Typography, styled } from '@mui/material';
import TitlePageComponent from '../Titles/TitlePageComponent';

const services = [
  {
    title: "Corrimãos em Aço Inoxidável",
    description: "Nossos corrimãos em aço inoxidável oferecem uma combinação perfeita de durabilidade e elegância. Ideais para escadas internas e externas, esses corrimãos são resistentes à corrosão, proporcionando segurança e um acabamento sofisticado ao seu ambiente. Personalizamos os corrimãos de acordo com as suas necessidades, garantindo um encaixe perfeito e uma instalação profissional."
  },
  {
    title: "Guarda-Corpos de Vidro",
    description: "Os guarda-corpos de vidro são uma escolha moderna e elegante para varandas, escadas e mezaninos. Utilizando vidros temperados ou laminados de alta resistência, nossos guarda-corpos oferecem segurança sem comprometer a visibilidade e a estética do seu espaço. Disponíveis com suportes em aço inoxidável ou alumínio, nossos guarda-corpos são projetados para complementar qualquer design arquitetônico."
  },
  {
    title: "Guarda-Corpos de Alumínio",
    description: "Leves, duráveis e resistentes à corrosão, os guarda-corpos de alumínio são uma excelente opção para áreas externas como varandas, sacadas e terraços. Com uma ampla gama de cores e acabamentos, nossos guarda-corpos de alumínio podem ser personalizados para se integrar perfeitamente ao design do seu espaço, proporcionando segurança e estética em um único produto."
  },
  {
    title: "Instalação de Corrimãos e Guarda-Corpos",
    description: "Nosso serviço de instalação profissional garante que seus corrimãos e guarda-corpos sejam instalados com precisão e segurança. Nossa equipe de especialistas possui vasta experiência e utiliza as melhores práticas e materiais para assegurar uma instalação duradoura e confiável. Estamos comprometidos em entregar um serviço de alta qualidade e total satisfação do cliente."
  },
  {
    title: "Manutenção e Reparo de Corrimãos e Guarda-Corpos",
    description: "Oferecemos serviços completos de manutenção e reparo para garantir que seus corrimãos e guarda-corpos permaneçam em ótimo estado. Desde a substituição de peças danificadas até a aplicação de novos acabamentos, nossa equipe está pronta para ajudar a prolongar a vida útil de seus produtos, mantendo-os seguros e esteticamente agradáveis."
  },
  {
    title: "Projetos Personalizados",
    description: "Entendemos que cada projeto é único. Por isso, oferecemos serviços personalizados para atender às suas necessidades específicas. Trabalhamos em estreita colaboração com nossos clientes para criar corrimãos e guarda-corpos que não só atendem aos requisitos funcionais, mas também complementam a estética do espaço. De projetos residenciais a grandes empreendimentos comerciais, estamos prontos para transformar sua visão em realidade."
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

const ServiceDescription = styled(Typography)({
  fontSize: 16,
  color: '#555'
});

const ServicesComponent = () => {
  return (
    <Box sx={{ padding: 4 }}>
    <TitlePageComponent title="Nossos serviços" />
      <Grid container spacing={2}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceCard>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesComponent;
