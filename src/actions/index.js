import { fetchTodos } from '../api';

export const getTodos = (filter) => ({
  type: 'GET_TODOS',
  payload: fetchTodos(filter)
})

let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
