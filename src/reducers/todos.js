import { VisibilityFilters } from '../constants';

const addTodo = (state, action) => ([
  ...state,
  {
    id: action.id,
    text: action.text,
    completed: false
  }
]);

const toggleTodo = (state, action) => (
  state.map(todo => {
    if (todo.id !== action.id) { return todo }
    return { ...todo, completed: !todo.completed }
  })
)

export default (state = [], action) => {
  switch(action.type) {
  case 'ADD_TODO':
    return addTodo(state, action);
  case 'TOGGLE_TODO':
    return toggleTodo(state, action);
  default:
    return state
  }
};

// Selectors
export const getVisibleTodos = (state, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return state;
    case VisibilityFilters.SHOW_COMPLETED:
      return state.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return state.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};
