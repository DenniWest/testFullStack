import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';

const TextContainer = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} minHeight={160}>
                <Grid xs display="flex" justifyContent="center" alignItems="center">
                    <Typography
                        className='titulo'
                        variant="h1"
                        gutterBottom
                        style={{
                            fontFamily: 'Manrope',
                            fontSize: '48px',
                            fontWeight: '400px',
                            lineHeight: '48px',
                            letterSpacing: '0em',
                            textAlign: 'center',
                            color: '#000000',
                        }}
                    >
                        Wait! Your Order In Progress.
                        <Typography
                        variant="subtitle2"
                        gutterBottom
                        style={{
                            fontFamily: 'Manrope',
                            fontSize: '24px',
                            fontWeight: '400px',
                            lineHeight: '24px',
                            letterSpacing: '0em',
                            textAlign: 'center',
                            color: '#4D5254',
                            
                        }}
                    >
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
                    </Typography>
                    </Typography>
                    
                </Grid>
            </Grid>
        </Box>
    );
};

export default TextContainer;
