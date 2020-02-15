import React from 'react';
import { Route } from 'react-router-dom';

import Layout from '../layouts/App';
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';
import TodoFilter from '../containers/TodoFilter';
import Paper from '../components/Paper';

export default () => (
  <Route path='/list'>
    <Layout>
      <Paper style={{marginBottom: '20px', textAlign: 'center'}}>
	<TodoFilter />
      </Paper>
      <Paper>
	<AddTodo />
	<TodoList />
      </Paper>
    </Layout>
  </Route>
)
