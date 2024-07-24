import React from "react";
import { Card, CardContent, Typography, Container, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Slider from "react-slick";
import { styled } from "@mui/system";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#f9f9f9",
  padding: theme.spacing(4), 
  borderRadius: "12px",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.15)",
  minHeight: "200px",
  overflow: "hidden",
  marginTop: "60px", 
  marginLeft: "10px", 
  marginRight: "10px",
  marginBottom: "40px",
}));



const StyledFold = styled("div")({
  position: "absolute",
  top: "0",
  right: "0",
  width: "0",
  height: "0",
  borderTop: "20px solid transparent",
  borderBottom: "20px solid transparent",
  borderLeft: "20px solid #f9f9f9",
});



const testimonialData = [
  {
    id: 1,
    name: "Ana Claudia",
    testimony:
      "Fui muito bem acolhida no Centro Integrar em um dos momentos mais difíceis da minha vida, agradeço a toda a equipe pela evolução do meu filho. O trabalho de vocês é fantástico.",
    avatar:
      "https://mundocarreira.com.br/wp-content/uploads/2017/07/maternidade-trabalho.jpg",
  },
  {
    id: 2,
    name: "Suely",
    testimony:
      "Eu gostaria que todos pudessem vivenciar a alegria de ver seu filho(a) fazendo coisas que sempre disseram que ele jamais faria devido ao diagnóstico de Autismo. Vocês deram à ela e a nós uma vida que não imaginávamos que teríamos. Obrigada, equipe!",
    avatar:
      "https://img.freepik.com/fotos-premium/alegre-mae-e-filho-abracando-na-ponte_251859-6922.jpg",
  },
  {
    id: 3,
    name: "Fabricia",
    testimony:
      "Já tinha conhecido crianças com TEA quando meu filho recebeu o diagnóstico. Fiquei extremamente preocupada em relação ao desenvolvimento dele, mas tudo mudou quando conheci o Centro Integrar e vimos a evolução dele que até então era inimaginável. Serei eternamente grata.",
    avatar: "https://lunetas.com.br/wp-content/uploads/2018/11/filho.jpg",
  },
  {
    id: 3,
    name: "Fabricia",
    testimony:
      "Salvador estava precisando de uma clínica diferenciada como esta! Profissionais excelentes e super capacitados!",
    avatar: "https://www.telavita.com.br/blog/wp-content/uploads/2019/04/mae-solo.jpg",
  },
];

const TestemonyComponent = () => {
  const renderStars = (numStars) => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(<StarIcon key={i} style={{ color: "#FFD700" }} />);
    }
    return stars;
  };

  const settings = {
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    dots: false,
    prevArrow: <></>,
    nextArrow: <></>,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <Container maxWidth="lg">
    <Slider {...settings}>
      {testimonialData.map((testimonial) => (
                  <React.Fragment style={{padding: 20}}>
        <StyledCard key={testimonial.id}>
          <StyledFold />
          <CardContent>
            <Avatar alt={testimonial.name} src={testimonial.avatar} />
            <Typography
              sx={{ fontFamily: "Fredoka One", fontWeight: "400", color: "#271344" }}
              variant="h6"
            >
              {testimonial.name}
            </Typography>
            {renderStars(5)}
            <Typography sx={{ fontFamily: "Prompt" }} variant="body2">
              {testimonial.testimony}
            </Typography>
          </CardContent>
        </StyledCard>
        </React.Fragment>
      ))}
    </Slider>
    </Container>
  );
};

export default TestemonyComponent;