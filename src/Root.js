import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import TodoListRoute from './routes/TodoListRoute';

export default ({ store }) => (
  <Provider store={store}>
    <Router>
      <TodoListRoute />
    </Router>
  </Provider>
)
