import React from 'react';
import './App.css';
import { Header } from './organisms/Header';
import { HeroComponent } from './organisms/HeroComponent';
import { Reviews } from './organisms/Reviews';
import { FormComponent } from './organisms/FormComponent';

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <HeroComponent></HeroComponent>
      <Reviews />
      <FormComponent />
    </React.Fragment>
  );
}


