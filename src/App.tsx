import React from 'react';
import { Container } from '@mui/material';
import './App.css';
import { Header } from './organisms/Header';
import { HeroComponent } from './organisms/HeroComponent';
import { Reviews } from './organisms/Reviews';
import { FormComponent } from './organisms/FormComponent';
import { BannerComponent } from './organisms/BannerComponent';
import { FooterComponent } from './organisms/FooterComponent';

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <HeroComponent></HeroComponent>
      <Reviews />
      <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <BannerComponent />
        <FormComponent />
      </Container>
      <FooterComponent />
    </React.Fragment >
  );
}


