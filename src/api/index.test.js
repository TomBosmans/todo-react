import * as api from './index';
import configureStore from '../configureStore';

const store = configureStore();

it('fetches all todos', () => {
  const todos = store.dispatch({
    type: 'GET_TODOS',
    payload: api.getTodos('all'),
  });

  console.log({todos})
  expect(todos.length).toBe(3);
});
