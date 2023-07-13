import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { DiscordIcon } from './../atoms/DiscordIcon';
import { SteamIcon } from './../atoms/SteamIcon';

export const IconsHeader = () => {


  return (
    <React.Fragment>
      <YouTubeIcon style={{ color: "white" }} fontSize='large' />
      <InstagramIcon fontSize='large' style={{ color: "white" }} />
      <DiscordIcon />
      <TwitterIcon fontSize='large' style={{ color: "white" }} />
      <SteamIcon />
    </React.Fragment>
  )
};