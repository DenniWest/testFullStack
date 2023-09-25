import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, IconButton, Typography, Grid } from '@mui/material';
import { lime, purple } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import './Menubar.css';
import Stepper from './Stepper';
import Img1 from '../../assets/1.png';
import Img2 from '../../assets/2.png';
import Img3 from '../../assets/3.png';
import Img4 from '../../assets/4.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#252f3d',
    },
    secondary: purple,
    
  },
});

const Menubar = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static" color='primary'>
      <Toolbar sx={{ alignContent: 'center', marginLeft: !isMobile ? "12%" : ""  }}>
        {/* Aquí puedes agregar la imagen al frente de cada item */}
        { !isMobile &&(
        <Grid container spacing={4}>
          <Grid item>
            <img
              src={Img1}
              alt='30-DAY SATISFACTION GUARANTEE'
              className="img-1"
            />
          </Grid>
          <Grid item>
            <Typography  sx={{ fontSize: '12px', margin: '2px'}} variant="body1">30-DAY SATISFACTION GUARANTEE</Typography>
          </Grid>
          <Grid item>
            <img
              src={Img2}
              alt='FREE DELIVERY ON ORDERS OVER $40.00'
              className="img-1"
            />
          </Grid>
          <Grid item>
            <Typography  sx={{ fontSize: '12px', margin: '2px' }} variant="body1">FREE DELIVERY ON ORDERS OVER $40.00</Typography>
          </Grid>
          <Grid item>
            <img
              src={Img3}
              alt='50.000+ HAPPY CUSTOMERS'
              className="img-1"
            />
          </Grid>
          <Grid item>
            <Typography  sx={{ fontSize: '12px', margin: '2px' }} variant="body1">50.000+ HAPPY CUSTOMERS</Typography>
          </Grid>
          <Grid item>
            <img
              src={Img4}
              alt='100% MONEY BACK GUARANTEE'
              className="img-1"
            />
          </Grid>
          <Grid item>
            <Typography  sx={{ fontSize: '12px', margin: '2px' }} variant="body1">100% MONEY BACK GUARANTEE</Typography>
          </Grid>
        </Grid>
        )}
        { isMobile &&(
          <Stepper/>
        )}
      </Toolbar>
    </AppBar>
    </ThemeProvider>

  );
};

export default Menubar;
