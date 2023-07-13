import React from 'react';
import { Container, Grid } from '@mui/material';

export const HeroComponent = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={0}>
          <Grid item bgcolor={'white'} border={'solid 1px'} xs={11}>
            xs=11
          </Grid>
          <Grid item xs={1}>
            <Grid item bgcolor={'white'} border={'solid 1px'} xs={1}>
              xs=1
            </Grid>
            <Grid item bgcolor={'white'} border={'solid 1px'} xs={1}>
              xs=1
            </Grid>
            <Grid item bgcolor={'white'} border={'solid 1px'} xs={1}>
              xs=1
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
};
