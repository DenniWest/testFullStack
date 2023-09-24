import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Satisfaction = () => {
  return (
    <Grid
      container
      width="100%" // Ancho al 100% del contenedor
      gap={2}
      alignItems="center"
    >
      {/* Imagen */}
      <Grid item>
        <img src="\src\assets\satisfaction.png" alt="Imagen" width={88} height={88} />
      </Grid>

      {/* Texto */}
      <Grid item xs={8} md={8}>
        <Typography
          variant="body1"
          style={{
            fontFamily: 'Manrope',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24.4px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#4D5254', // Color para el resto del texto
          }}
        >
          If you are not completely thrilled with your Clarifion - We have a 30 day satisfaction guarantee. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Satisfaction;
