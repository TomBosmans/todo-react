import * as api from '../api';

export const getTodos = (filter) => ({
  type: 'GET_TODOS',
  payload: api.getTodos(filter),
});

export const getTodo = (id) => ({
  type: 'GET_TODO',
  payload: api.getTodo(id),
});

export const createTodo = (data) => ({
  type: 'CREATE_TODO',
  payload: api.postTodo(data),
});

export const updateTodo = (id, data) => ({
  type: 'UPDATE_TODO',
  payload: {
    promise: api.patchTodo(id, data),
    data: { id: id, ...data },
  }
});

export const destroyTodo = (id) => ({
  type: 'DESTROY_TODO',
  payload: {
    promise: api.deleteTodo(id),
    data: { id: id },
  }
});

export const toggleTodo = (todo) => ({
  type: 'TOGGLE_TODO',
  payload: {
    promise: api.patchTodo(todo.id, { completed: !todo.completed }),
    data: {...todo, completed: !todo.completed }
  }
});
