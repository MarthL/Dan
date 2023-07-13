import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { DiscordIcon } from './../atoms/DiscordIcon';
import { SteamIcon } from './../atoms/SteamIcon';

export const IconsHeader = () => {
  const marginIcons: string = '10px';

  return (
    <React.Fragment>
      <div style={{ marginRight: '50px' }}>
        <YouTubeIcon style={{ color: "white", marginRight: marginIcons }} fontSize='large' />
        <InstagramIcon fontSize='large' style={{ color: "white", marginRight: marginIcons }} />
        <DiscordIcon />
        <TwitterIcon fontSize='large' style={{ color: "white", marginRight: marginIcons }} />
        <SteamIcon />
      </div>
    </React.Fragment>
  )
};