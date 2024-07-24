import React from "react";
import "./TextBlockComponent.css";
import TitlePageComponent from "../Titles/TitlePageComponent";

const TextBlockComponent = () => {
  const h3Style = {
    fontFamily: "Fredoka One",
    fontSize: "26px",
  };
  return (
    <div className="text-image-component">
      <TitlePageComponent
        beforeTitle={"Porque escolher o"}
        title={"Centro Integrar"}
      />

      <div className="color-blocks">
        <div className="color-block" style={{ backgroundColor: "#FF6666" }}>
          <h3 style={h3Style}>
            Atendimento 100% personalizado para o seu filho
          </h3>
          <p>
            O nosso plano terapêutico é criado e adaptado baseando-se nas
            características e necessidades do seu filho. Este tipo de
            acompanhamento permite uma evolução nos pontos fundamentais para o
            desenvolvimento.{" "}
          </p>
        </div>
        <div className="color-block" style={{ backgroundColor: "#FFC000" }}>
          <h3 style={h3Style}>
            Profissionais com formação de excelência e capacitação continuada
          </h3>
          <p>
            Os nossos colaboradores possuem treinamento constante com os
            materiais mais atualizados sobre TEA e intervenção baseada em ABA
            para garantir um tratamento de excelência para o seu filho.{" "}
          </p>{" "}
        </div>
        <div className="color-block" style={{ backgroundColor: "#ABCD52" }}>
          <h3 style={h3Style}>Atendimento Humanizado</h3>
          <p>
            O nosso principal pilar é o respeito ao portador de TEA e sua
            família. Todo o acompanhamento do seu filho é repleto de paciência e
            cuidado, tornando o processo ainda mais proveitoso e eficaz.{" "}
          </p>{" "}
        </div>
        <div className="color-block" style={{ backgroundColor: "#1AB9FF" }}>
          <h3 style={h3Style}>Parceria com a Família</h3>
          <p>
            Acreditamos na importância da base familiar para um tratamento
            eficiente do Autismo. Desta forma, realizamos todas as orientações
            necessárias para que a família possa acompanhar e auxiliar em todo o
            processo. A opinião e a participação familiar na decisão do
            tratamento e abordagem adequada é de extrema importância para a
            construção de um time entre nossos profissionais e a família.{" "}
          </p>{" "}
        </div>
        <div className="color-block" style={{ backgroundColor: "#FF6666" }}>
          <h3 style={h3Style}>Atendimento Multiprofissional</h3>
          <p>
            Um dos pilares da Intervenção Baseada em ABA é a presença de
            profissionais de diversas áreas da saúde (fonoaudiólogos,
            psicólogos, músicos, terapeuta ocupacional, psicopedagogo...) para
            uma abordagem completa de todos os pontos necessários para o
            desenvolvimento do seu filho.{" "}
          </p>{" "}
        </div>
        <div className="color-block" style={{ backgroundColor: "#ABCD52" }}>
          <h3 style={h3Style}>Experiência e Tradição</h3>
          <p>
            A experiência e os excelentes resultados acumulados nestes anos
            acompanhando de perto cada um dos nossos pacientes são fundamentais
            para ter confiança e sabedoria na criação de um programa efetivo
            para o seu filho.{" "}
          </p>{" "}
        </div>
        <div className="color-block" style={{ backgroundColor: "#FFC000" }}>
          <h3 style={h3Style}>Relatórios</h3>
          <p>
            Periodicamente relatórios sobre a evolução do seu filho são enviados
            para você, assim como o detalhamento do tratamento utilizado e
            nossos futuros planos terapêuticos.{" "}
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default TextBlockComponent;
