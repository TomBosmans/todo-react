import React from 'react';
import { Route } from 'react-router-dom';

import Layout from '../layouts/App';
import Paper from '../components/Paper';
import List from '../containers/TodoList';
import Filter from '../containers/TodoFilter';
import NewForm from '../containers/TodoNewForm';

export default () => (
  <Route path='/list'>
    <Layout>
      <Paper style={{marginBottom: '20px', textAlign: 'center'}}>
	<Filter />
      </Paper>
      <Paper>
	<NewForm />
	<List />
      </Paper>
    </Layout>
  </Route>
)
