import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

export const HeroComponent = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseOver1 = () => {
    setIsHovered1(true);
  };

  const handleMouseOut1 = () => {
    setIsHovered1(false);
  };

  const handleMouseOver2 = () => {
    setIsHovered2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovered2(false);
  };

  const handleMouseOver3 = () => {
    setIsHovered3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovered3(false);
  };

  return (
    <div className="container" style={{ height: '88vh', width: '90vw' }}>
      <div className="header">
        <Typography variant="h1" color="white" sx={{ cursor: 'default', fontSize: '38px', marginBottom: '50px' }}> Yozukayma Twitch </Typography>
        <Typography variant="h2" color="white" sx={{ cursor: 'default', fontSize: '28px' }}>Je stream sur twitch depuis plusieurs années. </Typography>
      </div>
      <div
        className={`img2 ${isHovered1 ? 'hovered' : ''}`}
        style={{ cursor: 'pointer' }}
        onMouseOver={handleMouseOver1} onMouseOut={(handleMouseOut1)}
        onClick={() => {
          window.open('https://www.twitch.tv/yozukayma_tv/videos?filter=all&sort=time', '_blank');
        }}
      >
        <h2>Twitch</h2>
      </div>
      <div className={`img3 ${isHovered2 ? 'hovered' : ''}`}
        style={{ cursor: 'pointer' }}
        onClick={() => {
          window.open('https://www.youtube.com/channel/UCAKMVWd4DqIoPDZ86BCKDRw', '_blank');
        }}
        onMouseOver={handleMouseOver2} onMouseOut={(handleMouseOut2)}>
        <h2>Youtube</h2>
      </div>
      <div className={`img4 ${isHovered3 ? 'hovered' : ''}`}
        style={{ cursor: 'pointer' }}
        onClick={() => {
          window.open('https://www.twitch.tv/yozukayma_tv/videos?filter=all&sort=time', '_blank');
        }}
        onMouseOver={handleMouseOver3} onMouseOut={(handleMouseOut3)}>
        <h2>Discord</h2>
      </div>
    </div >

  );
};

