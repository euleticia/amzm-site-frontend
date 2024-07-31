import React from "react";
import "./BigFooter.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faEnvelope,
  faMapMarkerAlt,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Tooltip, Box } from "@mui/material";
import Logo from "../../assets/logo.png";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const BigFooterComponent = () => {
  return (
    <footer className="big-footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={Logo} alt="Logo" className="footer-logo" />
          <Box sx={{ flexGrow: 1, m: 0 }}>
            <Tooltip title="Fale conosco no WhatsApp">
              <Button
                href="/"
                variant="contained"
                size="small"
                color="success"
                sx={{
                  p: 1,
                  mx: 1,
                  borderRadius: 50,
                  width: "auto",
                  minWidth: "auto",
                }}
              >
                <WhatsAppIcon fontSize="1em" />
              </Button>
            </Tooltip>
          </Box>
        </div>
        <div className="footer-section">
          <h3 style={{ fontFamily: "Roboto", fontSize: "24px" }}>
            Nosso Contato
          </h3>
          <FontAwesomeIcon icon={faMobileScreen} style={{ color: "#ffc000" }} />{" "}
          <a
            href="tel:(11) 94021-5248"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            (11) 94021-5248
          </a>
          <p>
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: "#ffc000" }}
          />{" "}
          amzm@amzm.com.br
          </p>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            style={{ color: "#ffc000" }}
          />{" "}
          Rua Capitão Venceslau Japiassu Aragão, 120
          <p>Vila Ema, São Paulo - SP</p>
        </div>
        <div className="footer-section">
          <h3 style={{ fontFamily: "Roboto", fontSize: "24px" }}>Menu</h3>
          <ul className="footer-menu">
            <li>
            <FontAwesomeIcon icon={faCaretRight} style={{ color: "#ffc000" }} /> {" "}
              <Link to="/">Página principal</Link>
            </li>
            <li>
            <FontAwesomeIcon icon={faCaretRight} style={{ color: "#ffc000" }} /> {" "}
              <Link to="/fale-conosco">Fale Conosco</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default BigFooterComponent;
