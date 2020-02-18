import todo from './todo';

export default (state = { data: [], isFetching: true }, action) => {
  switch(action.type) {
  case 'GET_TODOS_PENDING':
    return { ...state, isFetching: true };
  case 'GET_TODOS_FULFILLED':
    return { ...state, data: action.payload, isFetching: false };
  case 'GET_TODOS_REJECTED':
    return { ...state, isFetching: false, error: action.payload };
  case 'TOGGLE_TODO_FULFILLED':
  case 'UPDATE_TODO_FULFILLED':
  case 'TOGGLE_TODO_PENDING':
  case 'UPDATE_TODO_PENDING':
    return { ...state, data: state.data.map(item => todo(item, action))  }
  case 'CREATE_TODO_FULFILLED':
    return { ...state, data: [...state.data, action.payload] }
  case 'DESTROY_TODO_PENDING':
    return { ...state, data: state.data.filter(todo => todo.id !== action.payload.id) }
  default:
    return state;
  }
}
