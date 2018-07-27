import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// components
import Routes from './Routes';
import Provider from './store';

// stores
if (process.env.NODE_ENV === 'development') {
// Adds hot reloading
  if (module.hot) {
    module.hot.accept();
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Provider>
      <Routes />
    </Provider>
  </BrowserRouter>,
  document.querySelector('#root')
);
