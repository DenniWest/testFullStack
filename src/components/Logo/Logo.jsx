import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Logo = () => {
  return (
    <Grid container spacing={2}>
      {/* Columna izquierda para la imagen */}
      <Grid item xs={4}>
        <Box sx={{ background: '#2C7EF8', borderRadius: '10px' }}>
          <img src="\src\assets\clarifion2.png" alt="Logo" width={134} height={134} />
        </Box>
      </Grid>

      {/* Columna derecha dividida en 4 espacios */}
      <Grid item xs={8}>
        <Grid container direction="column" spacing={1}>
          {/* Espacio 1 */}
          <Grid item>
            <Box>
              <Typography variant="body1">
                Clarifion Air Ionizer <span style={{ color: '#969696' }}>$180</span> <span style={{ color: '#2C7EF8' }}>$84</span>
              </Typography>
            </Box>
          </Grid>
          {/* Espacio 2 */}
          <Grid item>
            <Box>
              <img src="\src\assets\start.png" alt="Imagen" width={98} height={18} />
            </Box>
          </Grid>
          {/* Espacio 3 */}
          <Grid item>
            <Box>
              <Typography variant="body1">
                <img src="\src\assets\dot.png" alt="Icono" width={16} height={16} /> 12 left in Stock
              </Typography>
            </Box>
          </Grid>
          {/* Espacio 4 */}
          <Grid item>
            <Box>
              <Typography variant="body1" style={{ color: '#4D5254' }}>
                Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Logo;
