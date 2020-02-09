import throttle from 'lodash/throttle';
import rootReducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { loadState, saveState } from './lib/localStorage';

const buildMiddlewares = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  return middlewares;
}

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(...buildMiddlewares())
  );

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos // TODO: id is bugged atm
    });
  }, 1000));

  return store;
};

export default configureStore;
