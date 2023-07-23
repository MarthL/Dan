import React from 'react';
import { Box } from '@mui/material';

export const FooterComponent = () => {
  return (
    <React.Fragment>
      <Box display={'flex'} alignContent={'center'} justifyContent={'center'} gap={'50px'} marginTop={5} marginBottom={5}>
        <Box color={'white'}>Daniel Jeangille, Tous droits réservés</Box>
        <Box color={'white'}>Design par Martin Aubertin</Box>
        <Box color={'white'}>Mentions légales</Box>
      </Box>
    </React.Fragment>
  )
};