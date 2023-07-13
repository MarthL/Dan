import React from 'react';
import './App.css';
import { Header } from './organisms/Header';
import { HeroComponent } from './organisms/HeroComponent';

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <HeroComponent></HeroComponent>
    </React.Fragment>
  );
}


