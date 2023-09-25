import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImgArrow from '../../assets/arrow.png';
import ImgCandado from '../../assets/candado.png';
import ImgBanks from '../../assets/banks.png';
const ButtonClaim = () => {
  return (
    <Grid
      container
      gap={2}
      flexDirection="column"
      alignItems="center"
    >
      {/* Botón */}
      <button
        style={{
          width: '100%', // Ancho al 100% del contenedor
          padding: '16px 64px',
          borderRadius: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', // Centra horizontalmente
          gap: '10px',
          background: '#59AE43',
          border: 'none',
        }}
      >
        <span
          style={{
            fontFamily: 'Manrope',
            fontSize: '20px',
            fontWeight: 700,
            lineHeight: '27px',
            letterSpacing: '0px',
            textAlign: 'center',
            color: '#FFFFFF',
          }}
        >
          Yes - Claim my discount 
        </span>
        {/* Puedes agregar un icono de flecha aquí */}
        <img src={ImgArrow} alt="" />
       
      </button>

      {/* Contenedor con 3 elementos */}
      <Grid
        container
        width="auto"
        gap={5}
        alignItems="center"
        justifyContent="center" // Centra horizontalmente
        textAlign="center" // Centra el texto horizontalmente
        borderRadius="4px"
        padding="8px 16px"
        border="1px solid #4D5254"
        bgcolor="#FFFFFF"
      >
        <Typography
          variant="body2"
          style={{
            fontFamily: 'Manrope',
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '17px',
            letterSpacing: '0px',
            textAlign: 'left',
            color: '#4D5254',
          }}
        >
          Free shipping
        </Typography>
        <Typography
          variant="body2"
          style={{
            fontFamily: 'Manrope',
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '18px',
            letterSpacing: '0em',
            textAlign: 'center',
            color: '#4D5254',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', // Centra horizontalmente
          }}
        >
          {/* Puedes agregar una imagen de 12x12px aquí */}
          <img src={ImgCandado} alt="Icono" width={12} height={12} style={{ marginRight: '4px' }} />
          Secure 256-bit SSL encryption.
        </Typography>
        <img src={ImgBanks} alt="Icono" width={180} height={14} style={{ marginRight: '4px' }} />
      </Grid>

      {/* Texto "No thanks, I don't want this" */}
      <Typography
        variant="body2"
        style={{
          width: '100%', // Ancho al 100% del contenedor
          fontFamily: 'Manrope',
          fontSize: '17px',
          fontWeight: 500,
          lineHeight: '25px',
          letterSpacing: '0px',
          textAlign: 'center',
          background: '#FFFFFF',
          color: '#F82C2C',
          textDecoration: 'underline',
        }}
      >
        NO THANKS, I DON’t WANT THIS.
      </Typography>
    </Grid>
  );
};

export default ButtonClaim;
