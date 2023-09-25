import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Img1 from '../../assets/1.png';
import Img2 from '../../assets/2.png';
import Img3 from '../../assets/3.png';
import Img4 from '../../assets/4.png';
const images = [
  {
    label: '30-DAY SATISFACTION GUARANTEE',
    imgPath: Img1,
  },
  {
    label: 'FREE DELIVERY ON ORDERS OVER $40.00',
    imgPath: Img2,
  },
  {
    label: '50.000+ HAPPY CUSTOMERS',
    imgPath: Img3,
  },
  {
    label: '100% MONEY BACK GUARANTEE',
    imgPath: Img4,
  },
];

function Stepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: '#252f3d',
        }}
      >
        <Button
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
          sx={{ color: '#FFFFFF' }}
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </Button>
        <img
          src={images[activeStep].imgPath}
          alt={images[activeStep].label}
          style={{ width: '20px', height: '20px', margin: '0 16px' }}
        />
        <Typography sx={{ color: '#FFFFFF', fontSize: '12px' }}>{images[activeStep].label}</Typography>
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
          sx={{ color: '#FFFFFF' }}
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      </Paper>
    </Box>
  );
}

export default Stepper;
