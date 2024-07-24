import React from "react";
import TitleSectionComponent from "../components/TitleSectionComponent/TitleSectionComponent";
import BackgroundImage from '../assets/lego-image.jpg';
import TopNavbar from "../components/Navigation/TopNavbar";


const Acompanhamento = () => {

    const containerStyle = {
        display: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center', // Centraliza horizontalmente
        justifyContent: 'center', // Centraliza verticalmente
        padding: '20px',
        paddingLeft: '40px',
        paddingRight: '40px',
        textAlign: 'left',
    };
    const h1Style = {
        fontFamily: 'Fredoka One',
        color: '#271344',
        fontSize: '40px'
    };

    const pStyle = {
        fontFamily: 'Prompt',
        color: '#777777',
        fontSize: '15px',
        fontWeight: '400px',
    };


    return (
        <>
            <TopNavbar showAddresses />
            <TitleSectionComponent
                title="Acompanhamento"
                backgroundImage={BackgroundImage} />
            <div style={containerStyle}>
                <h1 style={h1Style}>
                    Acompanhamento Domiciliar
                </h1>
                <p style={pStyle}>
                    O acompanhamento global da criança (casa, escola e lazer), com o desenvolvimento de programas de ensino, intervenção de manejo de comportamentos socialmente inadequados e treinamento de familiares, cuidadores, mediador escolar e aplicadores, é essencial para o desenvolvimento e progresso constante no desenvolvimento da criança com TEA. O trabalho desenvolvido pela nossa equipe envolve a realização de entrevistas, observações diretas no ambiente natural da criança e aplicação de protocolos baseados em evidência, culminando na elaboração de um Plano Educacional Individualizado, a partir do qual se identifica as maiores dificuldades da criança e se inicia um trabalho de atuação direta em cima das maiores dificuldades e deficiências identificadas. Todo esse acompanhamento dentro do ambiente de conforto da criança torna a aplicação das terapias muito mais efetivas e eficientes, contribuindo grandemente para o desenvolvimento da criança.
                </p>
                <h1 style={h1Style}>
                    Acompanhamento Escolar
                </h1>
                <p style={pStyle}>
                    A escola se constitui como um ambiente fundamental para enriquecer as experiências sociais das crianças com Transtorno do Espectro Autista (TEA), principalmente por permitir a interação social e contribuir para o desenvolvimento de novas aprendizagens e comportamentos. Entretanto, para que uma criança ou jovem com TEA sinta-se bem nesse espaço e compreenda o que se espera dela, faz-se necessário, na maioria das vezes, realizar algumas adaptações. A Supervisão de Acompanhante Terapêutico é uma intervenção nas estimulações que acontecem em ambiente natural e em situações cotidianas do seu filho. Esse trabalho possibilita a intervenção direta durante as ocorrências dos comportamentos inadequados da criança, como também o ensino de repertórios sociais para a mesma, ambos fundamentais para a sua convivência na sociedade. O supervisor realiza as visitas e observações no ambiente escolar que permitem a elaboração de avaliações detalhadas, além disso participa de reuniões de supervisão com o profissional que realiza o Acompanhamento Terapêutico e também com a equipe pedagógica da Escola, para juntos identificar as habilidades alvo do seu filho e desenvolver o planejamento específico para ele. Objetivando também a interação da criança com as outras pessoas e buscando estimular em ambiente natural as dificuldades individuais de cada um, esse profissional desenvolve relatórios com os progressos da criança e orientações para a família, realizando também importantes e esclarecedoras reuniões com os familiares, buscando sempre o melhor resultado com o tratamento.
                </p>
                <h1 style={h1Style}>
                    Orientação Familiar
                </h1>
                <p style={pStyle}>
                    Para que o programa de tratamento individual se efetive é essencial o trabalho em conjunto realizado por uma equipe multi e interdisciplinar, coordenados e alinhados nos objetivos do programa de tratamento desta criança, além das intervenções junto aos pais e a escola. As orientações a pais são desenvolvidas iniciando com um treinamento para aplicação dos procedimentos da ABA em casa e em outras situações e seguindo para a observação e descrição sistemática de comportamentos realizadas pelos pais/cuidadores da criança. A partir daí, um programa de intervenção junto aos pais/cuidadores é montado, utilizando todas as observações coletadas e analisadas, e cujo andamento é monitorado pela equipe multidisciplinar de atendimento.
                </p>
            </div>
        </>
    )
}

export default Acompanhamento;