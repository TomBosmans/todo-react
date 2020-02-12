export default (state = { todos: []}, action) => {
  switch(action.type) {
  case 'GET_TODOS_PENDING':
    return { ...state, fetching: true };
  case 'GET_TODOS_FULFILLED':
    return { ...action.payload };
  case 'GET_TODOS_REJECTED':
    return { ...state, fetching: false, error: action.payload };
  default:
    return state;
  }
}
