import React, { useState, useEffect } from "react";
import "./PolicyComponent.css";

const PolicyComponent = () => {
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    const politicaAceita = localStorage.getItem("politicaPrivacidadeAceita");
    if (!politicaAceita) {
      setMostrarModal(true);
    }
  }, []);

  const aceitarPolitica = () => {
    // Armazena a aceitação no localStorage
    localStorage.setItem("politicaPrivacidadeAceita", "true");
    // Fecha o modal
    setMostrarModal(false);
  };

  return (
    <div className={`modal ${mostrarModal ? "mostrar" : ""}`}>
      <div className="modal-conteudo">
        <h2 style={{ fontFamily: 'Fredoka One', color: '#271344' }}>Política de Privacidade</h2>
        Utilizamos cookies para melhorar sua experiência em nosso site. Ao
        continuar navegando, você aceita nossa{" "}
        <a href="/politica-privacidade">Política de Privacidade</a>
        <button style={{ backgroundColor: '#ff4880' }} onClick={aceitarPolitica}>
          Aceitar Política de Privacidade
        </button>
      </div>
    </div>
  );
};

export default PolicyComponent;
