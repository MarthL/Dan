import React from 'react';
import './App.css';
import { Icon } from './atoms/Icon'
import { Header } from './organisms/Header';

export const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Icon />
    </React.Fragment>
  );
}


