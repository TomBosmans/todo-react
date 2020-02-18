export default (state, action) => {
  switch(action.type) {
  case 'TOGGLE_TODO_FULFILLED':
  case 'UPDATE_TODO_FULFILLED':
  case 'TOGGLE_TODO_PENDING':
  case 'UPDATE_TODO_PENDING':
    if (state.id !== action.payload.id) { return state; }
    return { ...state, ...action.payload };
  default:
    return state;
  }  
};
