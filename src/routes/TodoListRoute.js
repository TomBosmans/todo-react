import React from 'react';
import { Route } from 'react-router-dom';

import Layout from '../layouts/App';
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';
import TodoFilter from '../containers/TodoFilter';

export default () => (
  <Route path='/list'>
    <Layout>
      <TodoFilter />
      <AddTodo />
      <TodoList />
    </Layout>
  </Route>
)
