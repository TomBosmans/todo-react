import { connect } from 'react-redux';
import { withRouter } from "react-router";

import TodoList from '../components/TodoList';

import { toggleTodo, getTodos } from '../actions';
import { VisibilityFilters } from '../constants';

const mapStateToProps = (state, { match: { params } }) => ({
  todos: []
});

export default withRouter(connect(
  mapStateToProps,
  { toggleTodo: toggleTodo }
)(TodoList));
