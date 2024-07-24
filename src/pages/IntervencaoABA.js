import React from "react";
import TitleSectionComponent from "../components/TitleSectionComponent/TitleSectionComponent";
import BackgroundImage from "../assets/lego-image.jpg";
import TopNavbar from "../components/Navigation/TopNavbar";


const IntervencaoABA = () => {

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

    const pStyle = {
        fontFamily: 'Prompt',
        color: '#777777',
        fontSize: '15px',
        fontWeight: '400px',
        lineHeight: '1.67',
    };

    return (
        <>
            <TopNavbar showAddresses />
            <TitleSectionComponent
                title="Intervenção com ABA"
                backgroundImage={BackgroundImage} />
            <div style={containerStyle}>
                <p style={pStyle}>
                    Na intervenção ABA o profissional elabora um plano de intervenção que depende de cada indivíduo, mas geralmente é amplo; incluindo habilidades acadêmicas, de linguagem, sociais, de cuidados pessoais, motoras e de brincar. O intenso envolvimento da família e da escola no programa é uma grande contribuição para o seu sucesso, uma vez que possibilita o aumento da intensidade da intervenção.
                </p>
                <p style={pStyle}>
                    A utilização da ABA requer a elaboração de uma estruturação do ensino, com objetivos claros e intervenções individualizadas, adequado às necessidades de cada indivíduo; um ensino basicamente intensivo com sessões que levam em média 30 a 40 horas semanais. As sessões em geral são realizadas de 1:1, ou seja, o indivíduo juntamente com o professor/terapeuta ou aplicador do programa. O ambiente é estruturado de forma a torná-lo agradável à criança, rejeitando punições e “premiando” o comportamento desejado. Além disso, são definidos procedimentos de ajuda para evitar ao máximo o contato da criança com o erro. De acordo com os resultados objetivamente medidos, progressos e dificuldades da criança, o procedimento de ensino pode sofrer alterações.
                </p>
                <p style={pStyle}>
                    O plano de intervenção e as formas de ensino envolvem uma avaliação rigorosa baseada em protocolos padronizados de avaliação, análise funcional dos comportamentos clinicamente relevantes (agressivos, autolesivos, estereotipados) que constituem barreiras comportamentais para o progresso no desenvolvimento físico, cognitivo, afetivo e social do individuo; o planejamento das intervenções sistemáticas em equipe multidisciplinar; o acompanhamento do individuo em situação escolar por meio da mediação escolar realizada por um acompanhante terapêutico e a orientação a pais realizada na residência da criança ou na clínica para que os pais (mediadores das relações do indivíduo com o ambiente) possam realizar as generalizações do tratamento realizado no ambiente clínico para outros espaços e situações.
                </p>
                <p style={pStyle}>
                    A avaliação inicial do desenvolvimento e comportamentos apresentados pelo indivíduo nos permite identificar quais habilidades já estão bem desenvolvidas, quais habilidades precisam ser aperfeiçoadas e até mesmo quais ainda precisam ser ensinadas desde o princípio. Cada habilidade que pretendermos ensinar ao indivíduo irá compor um programa.
                    Estes programas juntos formarão o currículo de ensino nomeado como Plano Individual de Ensino e Tratamento (PIET). Alguns programas estão voltados para ensinar habilidades muito básicas que chamamos de pré-requisitos. Os Programas Pré-requisitos que usaremos neste momento envolvem as habilidades de sentar, esperar, atender ao nome, estabelecer contato visual, tocar na mão de outra pessoa (toque aqui), realizar rastreamento visual, ter atenção a estímulos, realizar imitação com e sem objetos. Porém, esse ensino é gradual e realizado em pequenos passos, através de 'Tentativa Discreta' ou 'Ensino Incidental'.
                    No procedimento de ensino por Tentativa Discreta, o ambiente de aplicação do programa é controlado e estruturado. No procedimento de Ensino Incidental, aproveitamos oportunidades do dia-a-dia para ensinar habilidades para o indivíduo. Também pode-se criar condições para que uma atividade não tão corriqueira aconteça, como uma brincadeira ou uma tarefa doméstica, para aproveitá-la como oportunidade para ensino incidental. Por exemplo, podemos aproveitar que a criança vai fazer um lanche ou almoçar para fazer ensino incidental da resposta de sentar.
                </p>
                <p style={pStyle}>
                    Além das habilidades pré-requisitos de desenvolvimento que são sistematicamente ensinadas aos indivíduos com autismo durante o tratamento, faz-se necessário também estabelecer Programas de Intervenção Comportamental no Manejo dos Problemas Comportamentais Graves (Severe Behavior Problem – SBP) tais como comportamentos autolesivos, heterolesivos, birra, estereotipia motora e vocal. Nestes casos, a ABA tem como objetivo a diminuição da emissão desses comportamentos e o aumento de comportamentos socialmente considerados adequados visando a melhor inclusão social e educacional do indivíduo.
                </p>
                <p style={pStyle}>
                    Para que o programa se efetive é necessário o trabalho em conjunto realizado por uma equipe multi e interdisciplinar coordenados e alinhados nos objetivos do programa de tratamento desta criança, além das intervenções junto aos pais e escola do indivíduo.
                </p>

            </div>
        </>
    )
}

export default IntervencaoABA;