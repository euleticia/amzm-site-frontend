import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";

import {
  AppBar,
  Button,
  Toolbar,
  Tooltip,
  styled,
  Box,
  Typography,
  Divider,
  Container,
} from "@mui/material";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const AppBarCustom = styled(AppBar)(({}) => ({
  backgroundColor: "#181717",
}));

const AddressHeaderComponent = (props) => {
  return (
    <>
      <AppBarCustom position="relative" sx={{ minHeight: 10 }}>
        <Container sx={{ mb: 0, pb: 0 }}>
          <Toolbar sx={{ m: 0, p: 0 }}>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                display: { xs: "none", md: "flex" },
                m: 0,
              }}
            >
              <Typography sx={{ mr: 2 }}>
                <FontAwesomeIcon
                  icon={faMobileScreen}
                  style={{ color: "#ffc000" }}
                />{" "}
                <a
                  href="tel:(71) 3565-2700"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  (11) 94021-5248
                </a>
              </Typography>
              <Divider />
              <Typography>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  style={{ color: "#ffc000", }}
                />{" "}
                Rua Capitão Venceslau Japiassu Aragão, 120 - Vila Ema, São Paulo - SP
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, m: 0 }}></Box>
            <Box sx={{ flexGrow: 1, m: 0 }}>
              <Tooltip title="Encontre-nos no Facebook">
                <Button
                  href="https://www.facebook.com/centrointegrarsalvador"
                  target="_blank"
                  variant="contained"
                  size="small"
                  sx={{
                    p: 1,
                    mx: 1,
                    borderRadius: 50,
                    width: "auto",
                    minWidth: "auto",
                  }}
                >
                  <FacebookIcon fontSize="1em" />
                </Button>
              </Tooltip>
              <Tooltip title="Assista-nos no Youtube">
                <Button
                  href="/"
                  target="_blank"
                  variant="contained"
                  color="error"
                  size="small"
                  sx={{
                    p: 1,
                    mx: 1,
                    borderRadius: 50,
                    width: "auto",
                    minWidth: "auto",
                  }}
                >
                  <YouTubeIcon fontSize="1em" />
                </Button>
              </Tooltip>
              <Tooltip title="Siga-nos no Instagram">
                <Button
                  href="/"
                  target="_blank"
                  style={{ backgroundColor: "#ff4880" }}
                  variant="contained"
                  size="small"
                  sx={{
                    p: 1,
                    mx: 1,
                    borderRadius: 50,
                    width: "auto",
                    minWidth: "auto",
                  }}
                >
                  <InstagramIcon fontSize="1em" />
                </Button>
              </Tooltip>
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
          </Toolbar>
        </Container>
      </AppBarCustom>
    </>
  );
};

export default AddressHeaderComponent;