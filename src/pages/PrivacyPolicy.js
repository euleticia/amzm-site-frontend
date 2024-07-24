import React from "react";
import TitleSectionComponent from "../components/TitleSectionComponent/TitleSectionComponent";
import BackgroundImage from "../assets/lego-image.jpg";
import TopNavbar from "../components/Navigation/TopNavbar";

const PrivacyPolicy = () => {
  const containerStyle = {
    display: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    paddingLeft: "40px",
    paddingRight: "40px",
    textAlign: "justify",
  };

  const pStyle = {
    fontFamily: "Prompt",
    color: "#777777",
    fontSize: "15px",
    fontWeight: "400px",
    lineHeight: "1.67",
  };

  const h1Style = {
    fontFamily: "Fredoka One",
    color: "#271344",
    fontSize: "40px",
  };

  return (
    <>
      <TopNavbar showAddresses />
      <TitleSectionComponent
        title="Política de privacidade"
        backgroundImage={BackgroundImage}
      />
      <div style={containerStyle}>
        <h1 style={h1Style}>Aviso de Privacidade</h1>
        <p style={pStyle}>
          O CENTRO INTEGRAR CLÍNICA MULTIPROFISSIONAL LTDA deseja manter uma
          relação de confiança e de transparência junto aos seus pacientes e
          visitantes. Em razão disso, elaboramos este documento para ajudar você
          a entender quais informações são coletadas, por qual motivo as
          coletamos, se as compartilhamos e com quem. Além disso, este aviso tem
          como objetivo informar os seus direitos relativos a essas informações
          e como exercê-los junto ao CENTRO INTERAR. Para nós, a prioridade é
          zelar pela privacidade e pela segurança dos seus Dados Pessoais.
          Qualquer informação que você nos forneça será tratada de acordo com os
          limites aqui estabelecidos.{" "}
        </p>
        <h1 style={h1Style}>Seus direitos</h1>
        <p style={pStyle}>
          A Lei Geral de Proteção de Dados (LGPD) dá ao Cliente o direito de
          solicitar à CLÍNICA CENTRO INTEGRAR, a qualquer momento, mediante
          requisição formal, informações referentes aos dados tratados. Para que
          a Política de Privacidade seja bem compreendida, é fundamental
          esclarecer alguns conceitos importantes: + Cliente – toda pessoa
          física que adquire produtos e/ou serviços em nosso site; + Dados
          pessoais – qualquer informação relacionada a uma pessoa que a
          identifique ou que, usada em combinação com outras informações
          tratadas, identifique um indivíduo. Ainda, qualquer informação por
          meio da qual seja possível identificar uma pessoa ou entrar em contato
          com ela. + Tratamento de dados pessoais – considera-se tratamento de
          dado pessoal a coleta, produção, recepção, classificação, utilização,
          acesso, reprodução, transmissão, distribuição, processamento,
          arquivamento, armazenamento, eliminação, avaliação ou controle da
          informação, comunicação, transferência, difusão ou extração de dados
          de pessoas físicas. + Titular dados – qualquer pessoa física que tenha
          seus dados pessoais tratados pela CLÍNICA CENTRO INTEGRAR; +
          Finalidade – o que queremos alcançar com o tratamento de dados
          pessoais. + Necessidade – o tratamento de dados pessoais deve se
          limitar ao mínimo necessário para o propósito almejado. Ou seja, deve
          ser pertinente, proporcional e não excessivo. + Consentimento –
          autorização clara e objetiva que o titular dá para tratamento de seus
          dados pessoais com finalidade previamente estipulada. Após dar o
          consentimento, você pode revogá-lo a qualquer momento. A revogação não
          cancela os processamentos realizados previamente.
        </p>
        <h1 style={h1Style}>A quem essa Política de Privacidade se aplica?</h1>
        <p style={pStyle}>
          Aplica-se a todos os clientes da CLÍNICA CENTRO INTEGRAR, que de
          alguma forma tenham os dados pessoais tratados por nós.
        </p>
        <h1 style={h1Style}>
          Que tipo de informações pessoais coletamos e utilizamos?
        </h1>
        <p style={pStyle}>
          A CLÍNICA CENTRO INTEGRAR coleta e armazena os seguintes tipos de
          informações: 1. Informações que você nos fornece: a clínica coleta
          informações do cliente de diversas formas: quando ele cria uma conta e
          fornece dados pessoais; quando interage com o formulário na página de
          Contato; quando participa de pesquisas ou promoções de marketing etc.
          Dentre as informações que podem ser solicitadas estão: nome completo,
          data de nascimento, gênero, naturalidade, estado civil, e-mail,
          celular, telefone, endereço completo, RG, CPF, nome dos pais,
          informações acadêmicas, número do cartão de crédito, etc.
        </p>
        <p style={pStyle}>
          2. Informações coletadas automaticamente pela CLÍNICA CENTRO INTEGRAR:
          coletamos e armazenamos determinadas informações sempre que o cliente
          interage conosco. Por exemplo, utilizamos cookies e obtemos
          informações quando seu navegador acessa o nosso site; quando você
          clica em anúncios, e-mails de parceiros e outros conteúdos fornecidos
          por nós em outros sites.
        </p>
        <p style={pStyle}>
          3. Informações coletadas pelo dispositivo móvel: quando o cliente
          utiliza o nosso site, podemos receber dados sobre sua localização e
          seu dispositivo móvel. Podemos utilizar essas informações para
          oferecer conteúdos personalizados como, por exemplo, anúncios,
          resultados de buscas e outros. A maioria dos dispositivos móveis
          permite que o cliente desligue os serviços de localização. Informações
          coletadas de outras fontes: fontes públicas (por exemplo, dados
          demográficos); agências ou órgãos de crédito (por exemplo, relatórios
          de crédito/cheques); provedores de dados (por exemplo, dados
          demográficos relacionados a anúncios publicitários online e com base
          nos interesses do cliente).
        </p>
        <h1 style={h1Style}>Por que solicitamos seus dados pessoais?</h1>
        <p style={pStyle}>Os dados são necessários para:</p>
        <ul style={pStyle}>
          <li> disponibilizar produtos/serviços contratados;</li>
          <li> otimizar sua interação conosco;</li>
          <li>
            {" "}
            informar o cliente sobre as ofertas e divulgar os nossos serviços;
          </li>
          <li> garantir a segurança do site e dos dados que processa;</li>
          <li> cumprir obrigações legais;</li>
          <li> fins administrativos e de gestão.</li>
        </ul>
        <p style={pStyle}>O fornecimento de dados permite:</p>
        <ul style={pStyle}>
          <li>Disponibilizar produtos/serviços contratados;</li>
          <li>
            Enviar atualizações sobre o status de exames e comunicações de
            serviços;
          </li>
          <li>Prestar serviços adequados às necessidades do cliente;</li>
          <li>
            Melhorar a experiência dos clientes no site da CLÍNICA CENTRO
            INTEGRAR;
          </li>
          <li>Fazer análises e pesquisas de mercado;</li>
          <li>
            Manter o cliente informado sobre os produtos e serviços que
            oferecemos;
          </li>
          <li>Executar publicidade online direcionada;</li>
          <li>
            Prevenir, detectar e investigar atividades que estejam em desacordo
            com o nosso Código de Conduta ou que sejam proibidas ou ilegais;
          </li>
          <li>Melhorar nosso website, produtos e serviços.</li>
        </ul>
        <p style={pStyle}>
          A CLÍNICA CENTRO INTEGRAR utiliza bases legais, que podem variar de
          acordo com a finalidade da coleta, para tratar os dados pessoais dos
          clientes. O prazo de armazenamento pode mudar conforme a base legal
          aplicável a cada situação e a finalidade. Os serviços de marketing são
          oferecidos por meio de comunicações gratuitas sobre ofertas, serviços
          e produtos dirigidas ao Cliente, relacionadas ao seu perfil no site e
          a compras que fez. Esse serviço abrange e-mails, SMS e WhatsApp. Vale
          ressaltar que o Cliente pode cancelar o serviço de marketing, a
          qualquer momento, entrando em contato conosco através de nosso site.
        </p>
        <h1 style={h1Style}>Com quem compartilhamos seus dados?</h1>
        <p style={pStyle}>
          As informações coletadas somente serão compartilhadas quando forem
          necessárias: (i) para prestação adequada dos serviços objeto de suas
          atividades com empresas parceiras; (ii) proteção em caso de conflito;
          (iii) mediante decisão judicial ou requisição de autoridade
          competente; (iv) com empresas provedoras de infraestrutura tecnológica
          e operacional, como empresas intermediadoras de pagamento e provedoras
          de serviço de armazenamento de informações. Transferência
          Internacional de dados Como a internet é um ambiente global,
          determinados serviços oferecidos pela CLÍNICA CENTRO INTEGRAR;
          demandar a transferência dos seus dados para outros países. Nesses
          casos, os dados são tratados de acordo com a LGPD (Lei Geral de
          Proteção de Dados) e demais legislações de proteção. Tomamos medidas
          de segurança de acordo com nossas políticas e adotamos cláusulas
          padrão nos contratos com fornecedores e prestadores de serviço. Ao
          navegar em nosso site e/ou se comunicar conosco, você concorda com o
          tratamento de suas informações, inclusive a transferência
          internacional de dados, quando necessário. Adotamos medidas para
          garantir que quaisquer informações coletadas sejam tratadas com
          segurança, conforme os padrões de proteção de dados e de acordo com
          esta Política de Privacidade.
        </p>
        <h1 style={h1Style}>
          Por quanto tempo armazenamos informações pessoais?
        </h1>
        <p style={pStyle}>
          Armazenamos as informações dos Clientes de acordo com as normas de
          prescrição do Direito brasileiro.
        </p>
        <h1 style={h1Style}>Quais são os direitos do titular de dados?</h1>
        <p style={pStyle}>
          A partir do início da vigência da LGPD, o titular dos dados pessoais
          terá o direito de obter da CLÍNICA CENTRO INTEGRAR, a qualquer
          momento, mediante requisição formal, informações referentes aos seus
          dados. A CLÍNICA CENTRO INTEGRAR terá 15 dias para responder às
          solicitações dos titulares. Os pedidos serão analisados conforme
          previsto em legislação vigente e, por questões legais, algumas
          solicitações podem não ser atendidas. Os titulares dos dados, segundo
          o texto da LGPD, podem exercer os seus direitos por meio de:
        </p>
        <ol style={pStyle}>
          <li>Confirmação da existência de tratamento;</li>
          <li>Acesso aos dados;</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>
            Anonimização, bloqueio ou eliminação de dados desnecessários,
            excessivos ou tratados em desconformidade com o disposto nesta Lei;
          </li>
          <li>
            Portabilidade dos dados a outro fornecedor de serviço ou produto,
            mediante requisição expressa, de acordo com a regulamentação da
            autoridade nacional, observados os segredos comercial e industrial;
          </li>
          <li>
            Eliminação dos dados pessoais tratados com o consentimento do
            titular;
          </li>
          <li>
            Informação das entidades públicas e privadas com as quais o
            controlador realizou uso compartilhado de dados;
          </li>
          <li>
            Informação sobre a possibilidade de não fornecer consentimento e
            sobre as consequências da negativa;
          </li>
          <li>Revogação do consentimento.</li>
        </ol>
        <h1 style={h1Style}>Como exercer os seus direitos?</h1>
        <p style={pStyle}>
          Você pode exercer seus direitos entrando em contato direto com a
          CLÍNICA CENTRO INTEGRAR.
        </p>
        <h1 style={h1Style}>Cookies e tecnologias semelhantes</h1>
        <p style={pStyle}>
          Cookies são pequenos arquivos de dados que são colocados no seu
          computador ou em outros dispositivos (como ‘smartphones’ ou ‘tablets’)
          enquanto você navega no site. Utilizamos cookies, pixels e outras
          tecnologias (coletivamente, “cookies”) para reconhecer seu navegador
          ou dispositivo, aprender mais sobre seus interesses, fornecer recursos
          e serviços essenciais e também para:
        </p>
        <ul style={pStyle}>
          <li>
            Acompanhar suas preferências para enviar somente anúncios de seu
            interesse;
          </li>
          <li>Acompanhar os itens armazenados no seu carrinho de compras;</li>
          <li>
            Realização de pesquisas e diagnósticos para melhorar o conteúdo,
            produtos e serviços;
          </li>
          <li>Impedir atividades fraudulentas;</li>
          <li>Melhorar a segurança.</li>
        </ul>
        <h1 style={h1Style}>Legislação e foro</h1>
        <p style={pStyle}>
          Esta política será regida, interpretada e executada de acordo com as
          Leis da República Federativa do Brasil, especialmente a Lei nº
          13.709/2018, independentemente das Leis de outros estados ou países,
          sendo competente o foro de domicílio do Cliente para dirimir qualquer
          dúvida decorrente deste documento.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
