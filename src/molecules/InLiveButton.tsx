import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import './../App.css';

export const InLiveButton = () => {
  const [isLive, setIsLive] = useState(true);

  return (
    <Button variant="contained">
      {isLive && (
        <Brightness1Icon
          color='error'
          className={isLive ? 'blinking' : ''} // Ajouter la classe de clignotement si isLive est true
          style={{ marginRight: '5px' }} // Ajouter le style inline pour espacer l'icône
        />
      )}
      {isLive ? 'In live' : 'Not in live'}
    </Button>
  );
};
