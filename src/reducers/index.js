import { combineReducers } from 'redux';
import todos, * as fromTodos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
export const getVisibleTodos = (state) =>
  fromTodos.getVisibleTodos(state.todos, state.visibilityFilter);
