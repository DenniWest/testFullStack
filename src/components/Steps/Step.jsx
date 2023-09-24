import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery'; // Importa useMediaQuery
import './Step.css';

const Step = ({ stepNumber, title, imageSrc }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Grid container alignItems="center">
      <Paper elevation={0}>
        <Grid container alignItems="center">
          <Grid item>
            <img
              src={imageSrc}
              alt={`Step ${stepNumber}`}
              width={isMobile ? '20px' : '40px'} // Tamaño adaptado a la vista móvil
              height={isMobile ? '20px' : '40px'} // Tamaño adaptado a la vista móvil
              style={{ marginRight: '4px' }}
            />
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" component="div">
              Step {stepNumber}: {title}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Step;
