import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import rootReducer from './reducers';

// const persistedState = {
//   todos: [
//     { id: '0', text: 'welcome back', completed: false },
//     { id: '1', text: 'welcome back again', completed: true },
//   ]
// }
// const store = createStore(rootReducer, persistedState);

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
