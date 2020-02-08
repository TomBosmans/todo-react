import { combineReducers, createStore } from 'redux';
import todos from './reducers/todos';

const combinedReducers = combineReducers({
  todos,
});

export default createStore(combinedReducers);
