import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

export const HeroComponent = () => {
  return (
    <React.Fragment>
      <Grid container spacing={0} gap={0}>
        <Grid item xs={10}>
          <Card>
            <div style={{ position: 'relative' }}>
              <CardMedia title="hero" src={require("./../assets/hero.png")} component="img" sx={{ maxHeight: '800px' }} />
              <CardContent sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
                <Typography
                  variant="h3"
                  sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    padding: '8px',
                  }}
                >
                  Votre texte ici
                </Typography>
              </CardContent>
            </div>
          </Card>
        </Grid>
        <Grid container xs={2} spacing={0} gap={0}>
          <Grid item xs={12}>
            <Card sx={{ height: '100%' }}>
              <CardMedia title="hero" src={require("./../assets/car2.png")} component="img" height='100%' />
              <CardContent sx={{ position: 'relative', paddingBottom: '0' }}>
                <Typography
                  variant="h4"
                  margin={'revert'}
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                  }}
                >
                  Votre texte ici
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item bgcolor={'white'} xs={12}>
            <Card sx={{ height: '100%' }}>
              <CardMedia title="hero" src={require("./../assets/car3.png")} component="img" height='100%' />
              <CardContent sx={{ position: 'relative', paddingBottom: '0' }}>
                <Typography
                  variant="h4"
                  margin={'revert'}
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                  }}
                >
                  Votre texte ici
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item bgcolor={'white'} border={'solid 1px'} xs={12}>
            <Card sx={{ height: '100%' }}>
              <CardMedia title="hero" src={require("./../assets/car4.png")} component="img" height='100%' />
              <CardContent sx={{ position: 'relative', paddingBottom: '0' }}>
                <Typography
                  variant="h4"
                  margin={'revert'}
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                  }}
                >
                  Votre texte ici
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
