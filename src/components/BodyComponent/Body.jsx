import React, { useState, useEffect } from 'react';
import { Container, Grid, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Step from '../Steps/Step';
import Logo from '../Logo/Logo';
import TextCheck from '../TextCheck/TextCheck';
import SavePorcent from '../Save/SavePorcent';
import ButtonClaim from '../ButtonClaim/ButtonClaim.jsx';
import Satisfaction from '../Satisfation/Satisfaction';
import './Body.css';

const Body = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  const containerStyle = {
    width: 'auto',
    height: 'auto',
    top: '351px',
    left: '128px',
    borderRadius: '10px',
    backgroundColor: 'white',
  };

  const textStyle = {
    fontFamily: 'Manrope',
    fontSize: '32px',
    fontWeight: 400,
    lineHeight: '45px',
    letterSpacing: '0em',
    textAlign: 'left',
  };

  const emphasizedTextStyle = {
    ...textStyle,
    fontWeight: 600,
    color: '#2C7EF8',
  };

  const emphasizedTextStyle2 = {
    ...textStyle,
    fontWeight: 600,
    color: '#000000',
  };

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
    <>
      <Container style={containerStyle}>
        <div className="stepers" style={{ display: 'flex', padding: '0 20px', justifyContent: 'space-between' }}>
          <Step stepNumber={1} title="Cart Review" imageSrc="/src/assets/step1.png" />
          <Step stepNumber={2} title="Checkout" imageSrc="/src/assets/step2.png" />
          <Step stepNumber={3} title="Special Offer" imageSrc="/src/assets/step3.png" />
          <Step stepNumber={4} title="Confirmation" imageSrc="/src/assets/step4.png" />
        </div>
        <Grid container direction="row" justifyContent="center" alignItems="flex-start" spacing={1}>
          <Grid item xs={12} md={6}>
            {/* si la pantalla es movil esta en true lo muestra */}
            {isMobile && (
              <>
                <Typography>
                  <span style={emphasizedTextStyle}>ONE TIME ONLY</span>{' '}
                  <span style={emphasizedTextStyle2}>
                    special price for 6 extra Clarifion for only
                  </span>{' '}
                  <span style={emphasizedTextStyle}>$14 each</span>{' '}
                  <span style={emphasizedTextStyle2}>(\$84.00 total!)</span>
                </Typography>

              </>
            )}
           <img src="src\assets\publicidad.png" alt="" className="imagen1" />
            {!isMobile && (
              <Grid xs={12} md={12}>
                <Box
                  component="span"
                  sx={{
                    width: 'autopx',
                    height: '186px',
                    top: '665px',
                    left: '40px',
                  }}
                >
                  <img src="src\assets\user.png" alt="" className="imagen2" />
                  <Typography sx={{ color: '#4D5254' }}>
                    “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”
                  </Typography>
                </Box>
              </Grid>
            )}
          </Grid>
          <Grid item xs={12} md={6}>
            {!isMobile && (
              <Typography>
                <span style={emphasizedTextStyle}>ONE TIME ONLY</span>{' '}
                <span style={emphasizedTextStyle2}>
                  special price for 6 extra Clarifion for only
                </span>{' '}
                <span style={emphasizedTextStyle}>$14 each</span>{' '}
                <span style={emphasizedTextStyle2}>(\$84.00 total!)</span>
              </Typography>
            )}
            <Logo />
            <br />
            <TextCheck />
            <br />
            <SavePorcent />
            <br />
            <ButtonClaim />
            <br />
            <Satisfaction />
            <br />
            <br />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Body;
