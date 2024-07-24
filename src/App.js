import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Footer from "./components/FooterComponent/FooterComponent";
import BigFooterComponent from "./components/BigFooter/BigFooterComponent";
import Acompanhamento from "./pages/Acompanhamento";
import Atividades from  "../src/pages/Atividades/Atividades";
import MetodologiaIntegrar from "./pages/MetodologiaIntegrar";
import IntervencaoABA from "./pages/IntervencaoABA";
import FaleConosco from "./pages/Contact/FaleConosco";
import SuccessPage from "./components/SuccessPage/SuccessPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <>
      <Router>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/centro-integrar" element={<About />} />
            <Route path="/acompanhamento" element={<Acompanhamento />} />
            <Route path="/atividades" element={<Atividades />} />
            <Route path="/metodologia-integrar" element={<MetodologiaIntegrar />} />
            <Route path="/fale-conosco" element={<FaleConosco />} />
            <Route path="/intervencao-aba" element={<IntervencaoABA />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
          </Routes>
        </div>
        <BigFooterComponent />
        <Footer />
      </Router>
  </>
  );
}

export default App;