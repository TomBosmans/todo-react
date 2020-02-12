import rootReducer from './reducers';

import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import { createStore, applyMiddleware } from 'redux';
import * as api from './api';

const buildMiddlewares = () => {
  const middlewares = [promiseMiddleware, thunkMiddleware];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(loggerMiddleware);
  }

  return middlewares;
};

const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(...buildMiddlewares())
  );

  store.dispatch({
    type: 'GET_TODOS',
    payload: api.getTodos('all')
  });
  
  return store;
};

export default configureStore;
