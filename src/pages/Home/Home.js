import React from "react";
import SlideComponent from "../../components/SildeComponent/SlideComponent";
import "./Home.css";
import MidiaComponent from "../../components/MidiaComponent/MidiaComponent";
import TopNavbar from "../../components/Navigation/TopNavbar";
import SimpleDivComponent from "../../components/SimpleDivComponent/SimpleDivComponent";
import PolicyComponent from "../../components/Policycomponent/PolicyComponent";
import ServicesComponent from "../../components/ServicesComponent/ServiceComponent";
import WhatsAppButton from "../../components/WhatsappButton";

const Home = () => {
  return (
    <>
      <TopNavbar showAddresses />
      <WhatsAppButton />
      <SlideComponent />
      <ServicesComponent />
      <MidiaComponent />
      <SimpleDivComponent text="Nosso maior objetivo, é fornecer corrimãos e guarda-corpos de alta qualidade, combinando segurança, durabilidade e design moderno para garantir a satisfação e a proteção dos nossos clientes em diversos ambientes." />
      <PolicyComponent />
    </>
  );
};

export default Home;
