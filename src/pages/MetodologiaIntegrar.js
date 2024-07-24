import React from "react";
import TitleSectionComponent from "../components/TitleSectionComponent/TitleSectionComponent";
import BackgroundImage from "../assets/lego-image.jpg";
import TopNavbar from "../components/Navigation/TopNavbar";


const MetodologiaIntegrar = () => {

    const containerStyle = {
        display: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        paddingLeft: '40px',
        paddingRight: '40px',
        textAlign: 'justify',
    };

    const h1Style = {
        fontFamily: 'Fredoka One',
        color: '#271344',
        fontSize: '40px'
    };

    const pStyle = {
        fontFamily: prompt,
        color: '#777777'
    };

    return (
        <>
            <TopNavbar showAddresses />
            <TitleSectionComponent
                title="Centro Integrar"
                backgroundImage={BackgroundImage} />
            <div style={containerStyle}>
                <h1 style={h1Style}>
                    ABA
                </h1>
                <p style={pStyle}>
                    A utilização da ABA requer a elaboração de uma estruturação do ensino, com objetivos claros e intervenções individualizadas, adequado às necessidades de cada indivíduo; um ensino basicamente intensivo com sessões que levam em média 30 a 40 horas semanais. As sessões em geral são realizadas de 1:1, ou seja, o indivíduo juntamente com o professor/terapeuta ou aplicador do programa. O ambiente é estruturado de forma a torná-lo agradável à criança, rejeitando punições e “premiando” o comportamento desejado.
                </p>
                <h1 style={h1Style}>
                    TEACCH
                </h1>
                <p style={pStyle}>
                    TEACCH (Treatment and Education of Autistic and related Communication handicapped Children), esta abordagem foi desenvolvida na década de 70, por Eric Shopler, a partir de uma visão diferenciada da criança autista. Shopler acreditava que o autismo tinha uma base neurobiológica, assim, juntou-se ao grupo, propondo uma abordagem diferente, que consistia em um trabalho individualizado de ensino direcionado para os próprios indivíduos.
                </p>
                <h1 style={h1Style}>
                    PECS
                </h1>
                <p style={pStyle}>
                    PECS (Picture Exchange Communication System) foi desenvolvido em 1985, nos EUA por Andrew Bondy e Lori Frost. Esse sistema foi criado em resposta a dificuldade em usar com sucesso diversos programas de estimulação da comunicação em crianças e jovens com TEA. O princípio do PECS é baseado nos princípios do reforço positivo da Análise do Comportamento. O sistema pode ter duas funções: a primeira é que pode servir como uma ferramenta para comunicação alternativa, ou seja, para aquelas crianças que não desenvolvem a linguagem oral, esta passa a ser uma forma de se comunicar. A segunda é uma função aumentativa, para aquelas crianças que possuem linguagem, mas tem algum tipo de dificuldade, seja na espontaneidade, na formação de frases, no vocabulário, a resposta a pedidos, entre outros.
                    O PECS é divido em 6 fases, cada uma com objetivos específicos, é um dos programas utilizados para estimular o comportamento verbal e é fundamental para fazer o indivíduo compreender o funcionamento da comunicação e ter iniciativa em utilizar essa comunicação de forma funcional.
                </p>
                <h1 style={h1Style}>
                    ESTIMULAÇÃO MOTORA
                </h1>
                <p style={pStyle}>
                    Todo desenvolvimento se dá pela interação do indivíduo com o meio que o cerca, e com a motricidade não é diferente. Crianças com TEA tendem a apresentar interesses restritos de atividades, e as motoras muitas vezes não estão entre seus interesses, assim a falta de vivências poderá trazer prejuízos a sua motricidade. Diante disso, é importante que estratégias sejam criadas objetivando o engajamento delas em atividades de estimulação motora. O objetivo do educador físico é o de planejar, estruturar e aplicar as atividades motoras, dentro da individualidade de cada um e trabalhar o aumento do repertório motor através da exploração corporal. Para tal, a criança precisa explorar situações que envolvam importantes área do desenvolvimento motor como equilíbrio, lateralidade, coordenação motora, agilidade, força, velocidade, propriocepção, motricidade fina e percepções sensoriais.
                </p>
                <h1 style={h1Style}>
                    FONOTERAPIA
                </h1>
                <p style={pStyle}>
                    A aquisição da linguagem dentro do padrão de normalidade, se inicia nos primeiros contatos do bebê com o mundo, por meio das interações com as pessoas ao seu redor e das interferências que o ambiente e as pessoas que estão nesse meio exercem sobre o indivíduo. Ou seja, se eu tenho um ambiente estimulador, no qual as pessoas brincam, cantam e estimulam a criança, é esperado que essa criança tenha mais facilidade no seu desenvolvimento de linguagem do que uma criança que permanece em um ambiente no qual existem poucos estímulos.
                    Porém, para os indivíduos com Transtorno do Espectro do Autismo (TEA) essas interações por si só não são suficientes. Para eles precisamos criar muitas oportunidades para que desenvolvam habilidades comunicativas funcionais. Na fonoterapia estratégias e oportunidades são criadas para aumentar essas possibilidades de comunicação da criança e assim aumenta-se a possibilidade desenvolvimento da linguagem funcional.
                </p>
                <h1 style={h1Style}>
                    INTEGRAÇÃO SENSORIAL
                </h1>
                <p style={pStyle}>
                    O conceito da Integração Sensorial começou a ser desenvolvido pela Dra. Jean Ayres nos anos 60. Ela foi a primeira a desenvolver a teoria de que a Integração Sensorial tem influência no comportamento e na aprendizagem das crianças. Trata-se de um processo cerebral que leva à organização e interpretação das informações que recebemos através dos sentidos do nosso corpo, o olfato, o toque, o paladar, a visão, a audição, o movimento, dentre outros.
                </p>
                <p style={pStyle}>
                    A terapia de integração sensorial se faz necessária para crianças que tenham disfunção na organização dos sentidos, ela vai agir na organização do processamento sensorial e assim refletir no bom desempenho das atividades do cotidiano, compondo a capacidade do indivíduo de regular e organizar os graus, a intensidade e a natureza das respostas a estímulos diversos.
                </p>
            </div>
        </>
    )
}

export default MetodologiaIntegrar;