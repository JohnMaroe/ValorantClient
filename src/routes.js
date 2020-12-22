import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';


export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="https://johnmaroe.github.io/ValorantClient/" exact component={Login} />
      <Route path="https://johnmaroe.github.io/ValorantClient/home/:username" component={Home} />
    </BrowserRouter>
  );
};