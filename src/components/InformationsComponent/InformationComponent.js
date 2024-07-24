import * as React from "react";
import { Divider, Grid, Box, Container } from "@mui/material";


const InformationComponent = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
  };

  const contentStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const h1Style = {
    fontFamily: "Prompt",
    color: "#271344",
    fontSize: "16px",
    marginBottom: "8px",
  };

  const pStyle = {
    fontFamily: "Prompt",
    color: "#777777",
    fontSize: "14px",
    marginBottom: "6px",
  };

  return (
    <Container style={containerStyle}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={2}
          style={contentStyle}
        >
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <h1 style={h1Style}>Nosso Endereço</h1>
              <p style={pStyle}>Rua Capitão Venceslau Japiassu Aragão, 120</p>
              <p style={pStyle}>Vila Ema, São Paulo - SP</p>
            </div>
          </Grid>
          <Divider orientation="vertical" flexItem></Divider>
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <h1 style={h1Style}>Contato</h1>
              <p style={pStyle}>Tel.:  (11) 94021-5248</p>
              <p style={pStyle}>contato@amzm.com.br</p>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default InformationComponent;
