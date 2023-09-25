import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImgCheck from '../../assets/check.png';
const TextCheck = () => {
  return (
    <Grid container direction="column" spacing={2}>
      {/* Espacio 1 */}
      <Grid item container spacing={1} alignItems="center">
        <Grid item>
          {/* Puedes agregar una imagen de 22x22px aquí */}
          <img src={ImgCheck} alt="Icono" width={22} height={22} />
        </Grid>
        <Grid item>
          <Typography variant="body1" style={{ color: '#4D5254' }}>
            Negative Ion Technology may help with allergens
          </Typography>
        </Grid>
      </Grid>

      {/* Espacio 2 */}
      <Grid item container spacing={1} alignItems="center">
        <Grid item>
          {/* Puedes agregar una imagen de 22x22px aquí */}
          <img src={ImgCheck} alt="Icono" width={22} height={22} />
        </Grid>
        <Grid item>
          <Typography variant="body1" style={{ color: '#4D5254' }}>
            Designed for air rejuvenation
          </Typography>
        </Grid>
      </Grid>

      {/* Espacio 3 */}
      <Grid item container spacing={1} alignItems="center">
        <Grid item>
          {/* Puedes agregar una imagen de 22x22px aquí */}
          <img src={ImgCheck} alt="Icono" width={22} height={22} />
        </Grid>
        <Grid item>
          <Typography variant="body1" style={{ color: '#4D5254' }}>
            Perfect for every room in all types of places.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TextCheck;
