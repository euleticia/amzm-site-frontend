import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import React from 'react'
import Home from "./pages/Home/Home";
import Footer from "./components/FooterComponent/FooterComponent";
import BigFooterComponent from "./components/BigFooter/BigFooterComponent";
import FaleConosco from "./pages/Contact/FaleConosco";

function App() {
  return (
    <>
      <Router>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fale-conosco" element={<FaleConosco />} />
          </Routes>
        </div>
        <BigFooterComponent />
        <Footer />
      </Router>
  </>
  );
}

export default App;