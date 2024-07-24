import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuComponent.css';
import Logo from '../../assets/logo.png';

const MenuComponent = () => {
  const [isAutismoSubMenuOpen, setAutismoSubMenuOpen] = useState(false);

  const handleAutismoMouseEnter = () => {
    setAutismoSubMenuOpen(true);
  };

  const handleAutismoMouseLeave = () => {
    setAutismoSubMenuOpen(false);
  };
  

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Página principal</Link>
        </li>
        <li>
          <Link to="/centro-integrar">Quem somos</Link>
        </li>
        <li
          onMouseEnter={handleAutismoMouseEnter}
          onMouseLeave={handleAutismoMouseLeave}
        >
          <span>Serviços</span>
          {isAutismoSubMenuOpen && (
            <ul className="submenu">
              <li>
                <Link to="/intervencao-aba">Corrimões</Link>
              </li>
              <li>
                <Link to="/metodologia-integrar">Guarda-Corpos</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/fale-conosco">Fale Conosco</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuComponent;
