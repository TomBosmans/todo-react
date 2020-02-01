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
