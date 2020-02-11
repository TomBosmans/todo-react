import { combineReducers } from 'redux';
import todo from './todo';

export default (state = { todos: []}, action) => {
  console.log({state});
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

// const byId = (state = {}, action) => {
//   switch(action.type) {
//   case 'ADD_TODO':
//   case 'TOGGLE_TODO':
//     return { ...state, [action.id]: todo(state[action.id], action) };
//   case 'GET_TODOS_RESOLVED':
//     return { ...state, todos: action.payload }
//   default:
//     return state;
//   }
// };

// const allIds = (state = [], action) => {
//   switch(action.type) {
//   case 'ADD_TODO':
//     return [...state, action.id];
//   default:
//     return state;
//   }
// };

// const todos = combineReducers({byId, allIds});
// export default todos;
