import React from 'react';
import './SuccessPage.css';

const SuccessPage = () => {
  return (
    <div className="mensagem-container">
      <div className="mensagem">Mensagem enviada!</div>
      <div className="mensagem">Agradecemos o contato.</div>   
      <a href="/fale-conosco">
      <button className="botao">Voltar</button>
      </a>
    </div>
  );
}

export default SuccessPage;
