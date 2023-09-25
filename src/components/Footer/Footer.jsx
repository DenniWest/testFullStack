import React from 'react';
import { AppBar, Container, Grid, Toolbar, Typography } from '@mui/material';
import ImgCandado from '../../assets/candado.png'
const Footer = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#252F3D" }}>
      <Container>
        <Toolbar>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              <Typography variant="body1" color="inherit" sx={{ textAlign: 'center' }}>
                Copyright (c) 2023 | Clarifionsupport@clarifion.com
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" color="inherit" sx={{ textAlign: 'center' }}>
              <img src={ImgCandado} alt="Icono" width={16} height={16} style={{ marginRight: '8px' }} /> Secure 256-bit SSL encryption.
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
