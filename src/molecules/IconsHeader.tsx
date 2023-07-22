import React, { useState, useEffect } from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { DiscordIcon } from './../atoms/DiscordIcon';
import { SteamIcon } from './../atoms/SteamIcon';

export const IconsHeader = (props: any) => {
  const marginIcons: string = '10px';
  const [isHeader, setIsHeader] = useState('intial');
  const { header } = props;

  useEffect(() => {
    header ? setIsHeader('50px') : setIsHeader('0px');
  }, []);

  return (
    <React.Fragment>
      <div style={{ marginRight: isHeader }}>
        <YouTubeIcon style={{ color: "white", marginRight: marginIcons }} fontSize='large' />
        <InstagramIcon fontSize='large' style={{ color: "white", marginRight: marginIcons }} />
        <DiscordIcon />
        <TwitterIcon fontSize='large' style={{ color: "white", marginRight: marginIcons }} />
        <SteamIcon />
      </div>
    </React.Fragment>
  )
};