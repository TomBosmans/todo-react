import v4 from 'node-uuid';
import { VisibilityFilters } from '../constants';

const fakeDatabase = {
  todos: [{
      id: v4(),
      text: 'hey',
      completed: true
    }, {
      id: v4(),
      text: 'ho',
      completed: false
    }, {
      id: v4(),
      test: "let's go",
      completed: false
    }]
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
  delay(500).then(() => {
    switch(filter) {
    case VisibilityFilters.SHOW_ALL:
      return fakeDatabase.todos;
    case VisibilityFilters.SHOW_ACTIVE:
      return fakeDatabase.todos.filter(todo => !todo.completed);
    case VisibilityFilters.SHOW_COMPLETED:
      return fakeDatabase.todos.filter(todo => todo.completed);
    default:
      throw new Error(`unknown filter ${filter}`);
    }
  });
