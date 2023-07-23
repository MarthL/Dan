import React from 'react';
import { Typography, Box } from '@mui/material';
import { CarouselCustom } from '../molecules/CarouselCustom';

export const Reviews = () => {
  return (
    <React.Fragment>
      <Box sx={{ marginTop: '100px' }}>
        <Typography variant="h3" color="white" textAlign={'center'} mt={5} mb={5} height={100}>Ce qu'en pensent mes viewers</Typography>
      </Box>
      <CarouselCustom />
    </React.Fragment>
  )
};