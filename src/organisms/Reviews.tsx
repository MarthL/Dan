import React from 'react';
import { Typography } from '@mui/material';
import { CarouselCustom } from '../molecules/CarouselCustom';

export const Reviews = () => {
  return (
    <React.Fragment>
      <Typography variant="h3" color="white" textAlign={'center'} mt={5}>Ce qu'en pensent mes viewers</Typography>
      <CarouselCustom />
    </React.Fragment>
  )
};