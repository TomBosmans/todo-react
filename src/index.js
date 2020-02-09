import React from 'react';
import configureStore from './configureStore';
import Root from './components/Root';
import { render } from 'react-dom';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);
