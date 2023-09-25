import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImgPorcent from '../../assets/procent.png';
const SavePorcent = () => {
  return (
    <Grid
      container
      width="auto"
      height="auto"
      padding="12px 16px"
      borderRadius={3}
      alignItems="center"
      spacing={2}
      style={{ backgroundColor: '#EDF3FD' }}
    >
      <Grid item>
        {/* Puedes agregar una imagen de 32x32px aquí */}
        <img src={ImgPorcent} alt="Icono" width={32} height={32} />
      </Grid>
      <Grid item>
        <Typography variant="body1" style={{ fontFamily: 'Manrope', fontSize: 16, fontWeight: 400, lineHeight: '22px', letterSpacing: 0, textAlign: 'left' }}>
          Save <span style={{ color: '#2C7EF8' }}>53%</span> and get <span style={{ color: '#2C7EF8' }}>6 extra Clarifision</span> for only <span style={{ color: '#2C7EF8' }}>$14 Each</span>.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SavePorcent;
