import React from 'react';
import logo from '../assets/logo.svg';
import { InLiveButton } from '../molecules/InLiveButton';
import { Box } from '@mui/material';
import { IconsHeader } from '../molecules/IconsHeader';
import { Stack } from '@mui/material';

export const Header = () => {
  return (
    <React.Fragment>
      <Stack
        direction="row"
        alignItems="center"
        justifyItems="center"
      >
        <div style={{ height: '110px' }}>
          <img src={logo} alt="" style={{ marginTop: '20px' }} />
        </div>
        <InLiveButton />
        <Box sx={{ margin: 'auto' }} />
        <IconsHeader header />
      </Stack>
    </React.Fragment >
  );
};