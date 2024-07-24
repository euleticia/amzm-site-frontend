import React from 'react';
import './BalancingComponent.css';
import Image from  '../../assets/image-left-home.png';

const BalancingComponent = () => {
  return (
    <div className="balancing-component">
      <div className="image-container">
        <img src={Image} />
      </div>
      <div className="text-blocks">
        <div className="text-block">
          <h3 style={{fontFamily: 'Fredoka One', color: "#271344"}}>Nossos serviços</h3>
          <p style={{color:'#777777'}}>Avaliamos o seu filho através de observações diretas no ambiente natural da criança e aplicação de protocolos baseados em evidência, culminando na elaboração de um Plano Educacional Individualizado</p>
        </div>
        <div className="text-block">
          <h3 style={{fontFamily: 'Fredoka One', color: "#271344"}}>Realizamos o acompanhamento global do seu filho</h3>
          <p style={{color:'#777777'}}>Ambiente domiciliar, escolar e nos momentos de lazer, com o desenvolvimento de programas de ensino, intervenção de manejo de comportamentos inadequados e treinamento de familiares, cuidadores, mediador escolar e aplicadores, podendo ser presencial ou à distância.</p>
        </div>
        <div className="text-block">
          <h3 style={{fontFamily: 'Fredoka One', color: "#271344"}}>Onde nos encontrar</h3>
          <p style={{color:'#777777'}}>A sede principal da nossa Clínica está localizada em Salvador, porém o nosso atendimento se estende para algumas outras cidades do nosso estado, sendo o caso de Alagoinhas, Feira de Santana, Santo Antônio de Jesus, Ilhéus e Itabuna.</p>
          <a href="https://api.whatsapp.com/send?phone=5571996534336&text=Ol%C3%A1!%20Tudo%20bem%3F%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.%20" target="_blank" rel="noopener noreferrer">
          <button style={{fontFamily:'Fredoka One', borderRadius: '5px', padding: '15px', backgroundColor: '#ff4880'}}>Fale conosco</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BalancingComponent;
