import { Card, Grid } from "@mui/material";
import React from 'react'
import ContactFormComponent from "../ContactForm/ContactFormComponent";

const MapsComponent = () => {
  return (
    <>
      <Grid container style={{ marginBottom: 100 }}>
        <Grid item md={4} sm={12} sx={{ pl: { sx: 0, md: 5, width: "100%" } }}>
          <Card
            sx={{
              pb: { sx: 0, md: 1 },
              m: 0,
            }}
          >
            <ContactFormComponent />
          </Card>
        </Grid>
        <Grid
          item
          md={8}
          sm={12}
          xs={12}
          sx={{
            px: { sx: 0, md: 4 },
            pr: { sx: 0, md: 5 },
            py: { sx: 6, md: 2 },
            width: "100%",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7653433248697!2d-38.461852613315564!3d-12.986855027432705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b1165f328b3%3A0x111f31d6b69242d1!2sAlameda%20das%20Algarobas%2C%20426%20-%20Pituba%2C%20Salvador%20-%20BA%2C%2041820-500!5e0!3m2!1spt-BR!2sbr!4v1696373428145!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0, height: "100%", borderRadius: 10 }}
          ></iframe>
        </Grid>
      </Grid>
    </>
  );
};

export default MapsComponent;
