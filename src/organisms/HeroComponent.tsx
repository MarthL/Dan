import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

export const HeroComponent = () => {
  return (
    <div className="container" style={{ height: '88vh' }}>
      <div className="header">
        <Typography variant="h1" color="white" sx={{ cursor: 'default' }}> Yozukayma Twitch </Typography>
        <Typography variant="h2" color="white" sx={{ cursor: 'default' }}>Je stream sur twitch depuis plusieurs années. </Typography>
      </div>
      <div className="img2">
        <h2>Twitch</h2>
      </div>
      <div className="img3">
        <h2>Youtube</h2>
      </div>
      <div className="img4">
        <h2>Discord</h2>
      </div>
    </div>

  );
};

