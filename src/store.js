import throttle from 'lodash/throttle';
import rootReducer from './reducers';
import { createStore } from 'redux';
import { loadState, saveState } from './lib/localStorage';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  });
}, 1000));

export default store;
