import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './Header.css';
import ImgClarifion from '../../assets/clarifion.png';
import ImgAntivirus from '../../assets/antivirus.png';
const Header = () => {
  return (
    <Container className="header-container">
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={6}>
          <img src={ImgClarifion} alt="Imagen Izquierda" className="header-image-right" />
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <img src={ImgAntivirus} alt="Imagen Derecha" className="header-image-left" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
