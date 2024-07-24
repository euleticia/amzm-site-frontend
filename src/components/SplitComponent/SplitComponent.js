import React from "react";
import "./SplitComponent.css";
import BeeImage from "../../assets/image-bee-1.png";
import ImageBackground from "../../assets/crianca2.png";
import ImageButtonFile from "../../assets/button-video.png";
import { Grid, ButtonBase, styled, Box } from "@mui/material";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 500,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 300,
  },
  [theme.breakpoints.down('md')]: {
    width: '100% !important', // Overrides inline-style
    height: 300,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const SplitComponent = () => {

  return (
    <>
      <Grid
        container
        alignItems="stretch"
        sx={{ mb: 10 }}
      >
        <Grid item md={6} sm={12} xs={12}>
          <Box
            sx={{
              backgroundColor: '#351c5a',
              color: '#fff',
              padding: 2,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <h2
              style={{
                fontFamily: "SchoolBell",
                fontSize: 17,
                color: "#ff4880",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 2.4,
                width: 'auto'
              }}
            >
              Centro integrar
              <span style={{ marginRight: 30 }}></span>
              <img alt="bee animated" className="animated-image" src={BeeImage}></img>
            </h2>
            <p
              style={{
                fontFamily: "Fredoka One",
                fontSize: 40,
                color: "white",
                fontWeight: 400,
              }}
            >
              Clínica Especializada em TEA
            </p>
          </Box>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Box sx={{ display: 'flex', width: '100%' }}>
            <ImageButton
              focusRipple
              style={{
                width: '100%',
              }}
              href={"https://www.youtube.com/watch?v=aJFOWZraM80"}
              target="_blank"
            >
              <ImageSrc style={{ backgroundImage: `url(${ImageBackground})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <img src={ImageButtonFile} alt="play btn" />
              </Image>
            </ImageButton>
          </Box>
        </Grid>
      </Grid >
    </>
  );
};

export default SplitComponent;
