import React from "react";
import TitleSectionComponent from "../components/TitleSectionComponent/TitleSectionComponent";
import BackgroundImage from "../assets/corrimao1.jpeg";
import TopNavbar from "../components/Navigation/TopNavbar";
import './About.css';
import Galeria from "../components/GaleriaComponent/GaleriaComponent";
import WhatsAppButton from "../components/WhatsappButton";

const About = () => {
  return (
    <div>
      <WhatsAppButton />
      <TopNavbar showAddresses />
      <TitleSectionComponent
        title="AMZM Corrimãos"
        backgroundImage={BackgroundImage}
      />
      <div className="about-container">
        <div className="about-text">
          <p style={{color: '#777777'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo volutpat pellentesque. Phasellus sed bibendum urna, non iaculis nisl. Integer rutrum, nisl eget porttitor viverra, erat tellus venenatis enim, vel pretium lectus eros eu purus. In enim magna, aliquet quis purus elementum, condimentum tincidunt leo. Pellentesque et leo eget ligula iaculis faucibus vel eget nisl. In at semper turpis. Sed quis neque ac nisi laoreet convallis quis sit amet sem. Morbi eleifend, ante et egestas dapibus, orci lectus pulvinar lectus, ornare lobortis quam augue in dolor. Maecenas consequat metus ac mattis lacinia. Aenean iaculis ex eu congue placerat. Mauris vitae mauris massa. Duis ut lectus interdum, posuere metus ullamcorper, elementum mi. Nam ornare bibendum tortor at porttitor. Proin nunc dolor, eleifend vitae dui non, mollis iaculis metus. Aliquam erat volutpat. Fusce blandit scelerisque rutrum.
          </p>
        </div>

      </div>
      <Galeria />
    </div>
  );
};

export default About;
