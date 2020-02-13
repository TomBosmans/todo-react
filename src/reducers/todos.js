import todo from './todo';

export default (state = { data: [] }, action) => {
  switch(action.type) {
  case 'GET_TODOS_PENDING':
    return { ...state, fetching: true };
  case 'GET_TODOS_FULFILLED':
    return { ...state, data: action.payload, fetching: false };
  case 'GET_TODOS_REJECTED':
    return { ...state, fetching: false, error: action.payload };
  case 'TOGGLE_TODO_FULFILLED':
    return { ...state, data: state.data.map(item => todo(item, action))  }
  case 'CREATE_TODO_FULFILLED':
    return { ...state, data: [...state.data, action.payload] }
  default:
    return state;
  }
}
