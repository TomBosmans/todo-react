export default (state, action) => {
  switch(action.type) {
  case 'TOGGLE_TODO_FULFILLED':    
    if (state.id !== action.payload.id) { return state; }
    return action.payload;
  default:
    return state;
  }  
};
