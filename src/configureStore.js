import throttle from 'lodash/throttle';
import rootReducer from './reducers';
import { createStore } from 'redux';
import { loadState, saveState } from './lib/localStorage';

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(rootReducer, persistedState);

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos // TODO: id is bugged atm
    });
  }, 1000));

  return store;
}

export default configureStore;
