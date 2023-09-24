import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './Header.css';

const Header = () => {
  return (
    <Container className="header-container">
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={6}>
          <img src="src\assets\clarifion.png" alt="Imagen Izquierda" className="header-image-right" />
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <img src="src\assets\antivirus.png" alt="Imagen Derecha" className="header-image-left" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
