import React, { useState, useEffect } from 'react';
import { Container, Box, Card, CardContent, Typography, CardActions, Button, Avatar } from '@mui/material';
import { IconsHeader } from '../molecules/IconsHeader';

export const BannerComponent = () => {

  const [avatar, setAvatar] = useState('dan1.png');

  useEffect(() => {
    setTimeout(() => {
      const changer = avatar.includes('dan1.png') ? 'dan2.png' : 'dan1.png';
      setAvatar(changer);
    }, 1000);
  }, [avatar]);

  return (
    <React.Fragment>
      <Container sx={{ height: '100%' }}>
        <Card sx={{ maxWidth: '56%', height: '400px', background: 'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%);' }}>
          <CardContent>
            <Avatar src={`${avatar}`} sx={{ backgroundColor: 'white', width: '100px', height: '100px', display: "flex", margin: 'auto', marginBottom: '20px' }} />
            <Typography variant="h5" component="div" textAlign={'center'}>
              YozuKayma
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" textAlign={'center'}>
              Streamer
            </Typography>
            <Box component={'div'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
              <IconsHeader header={false} />
            </Box>
          </CardContent>
          <CardActions sx={{ margin: 'auto' }}>
            <Button size="small" variant='contained' sx={{ margin: 'auto' }}>PORTFOLIO</Button>
          </CardActions>
        </Card>
      </Container>
    </React.Fragment >
  )
};