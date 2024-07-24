import React from "react";
import TitleSectionComponent from "../../components/TitleSectionComponent/TitleSectionComponent";
import TitlePageComponent from "../../components/Titles/TitlePageComponent";
import BackgroundImage from "../../assets/lego-image.jpg";
import ChildImage from "../../assets/child-man.png";
import PaintImage from "../../assets/color1.png";
import BookImage from "../../assets/icon-fcb-10.png";
import CrampImage from "../../assets/tesoura.png";
import "./Atividades.css";
import TopNavbar from "../../components/Navigation/TopNavbar";

import Atividade1 from '../../assets/atividades/1.pdf';
import Atividade2 from '../../assets/atividades/2.pdf';
import Atividade3 from '../../assets/atividades/3.pdf';
import Atividade4 from '../../assets/atividades/4.pdf';



const Atividades = () => {
  const pStyle = {
    fontFamily:  'Fredoka One',
    fontSize: '24px',
    color: '#271344',
  }

  return (
    <>
      <TopNavbar showAddresses />
      <TitleSectionComponent
        title="Atividades"
        backgroundImage={BackgroundImage}
      />

      <div className="content-container">
        <TitlePageComponent
          beforeTitle={"Faça o seu"}
          title={"Download"}
          subtitle={"O Centro Integrar desenvolve e aplica dentro dos Programas de Intervenção, atividades e brincadeiras para estimular e ajudar no desenvolvimento e no processo de aprendizagem do seu filho. Nesta página você poderá acessar alguns dos nossos materiais e aplicar em sua casa um pouco dos métodos utilizados pelos nossos terapeutas e pela família dos nossos pequenos!"}
        />
        <div className="icon-container">
          <div className="icon-left">
            <div className="icon">
              <div className="circle-background-book">
              <a href={Atividade1}>
                <img src={BookImage} alt="Livro" />
                </a>
              </div>
              <p style={pStyle}>Brincadeiras e Atividades</p>
            </div>
            <a style={{textDecoration: 'none'}} href={Atividade2}>
            <div className="icon">
              <div className="circle-background-cramp">
              <img src={CrampImage} className="icon-image" alt="Tesoura" />
              </div>
              <p style={pStyle}>Atividades com Tesourinha</p>
            </div>
            </a>
          </div>
          <img src={ChildImage} alt="Criança" />
          <div className="icon-right">
            <div className="icon">
              <div className="circle-background-paint">
              <a href={Atividade3}>
              <img src={PaintImage} className="icon-image" alt="Pincel" />
              </a>
              </div>
              <p style={pStyle}>Atividades para Colorir - 1</p>
            </div>
            <div className="icon">
              <div className="circle-background-paint2">
              <a href={Atividade4}>
              <img src={PaintImage} className="icon-image" alt="Pincel" />
              </a>
              </div>
              <p style={pStyle}>Atividades para Colorir - 2</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Atividades;
