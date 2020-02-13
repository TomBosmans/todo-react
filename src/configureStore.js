import rootReducer from './reducers';

import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import { createStore, applyMiddleware } from 'redux';

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
  
  return store;
};

export default configureStore;
