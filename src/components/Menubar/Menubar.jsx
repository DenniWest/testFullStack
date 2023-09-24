import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Menubar.css';

const Menubar = () => {
  return (
    <AppBar position="static" className="menubar-appbar">
      <Toolbar>
        {/* Aquí puedes agregar la imagen al frente de cada item */}
        <Grid container spacing={2}>
          <Grid item>
            <img
              src='\src\assets\1.png'
              alt='30-DAY SATISFACTION GUARANTEE'
              className="img-1"
            />
          </Grid>
          <Grid item>
            <Typography variant="body1">30-DAY SATISFACTION GUARANTEE</Typography>
          </Grid>
          <Grid item>
            <img
              src='\src\assets\2.png'
              alt='FREE DELIVERY ON ORDERS OVER $40.00'
              className="img-1"
            />
          </Grid>
          <Grid item>
            <Typography variant="body1">FREE DELIVERY ON ORDERS OVER $40.00</Typography>
          </Grid>
          <Grid item>
            <img
              src='\src\assets\3.png'
              alt='50.000+ HAPPY CUSTOMERS'
              className="img-1"
            />
          </Grid>
          <Grid item>
            <Typography variant="body1">50.000+ HAPPY CUSTOMERS</Typography>
          </Grid>
          <Grid item>
            <img
              src='\src\assets\4.png'
              alt='100% MONEY BACK GUARANTEE'
              className="img-1"
            />
          </Grid>
          <Grid item>
            <Typography variant="body1">100% MONEY BACK GUARANTEE</Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Menubar;
