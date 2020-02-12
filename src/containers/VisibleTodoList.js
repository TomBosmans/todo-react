import { connect } from 'react-redux';
import { withRouter } from "react-router";

import TodoList from '../components/TodoList';

import { toggleTodo } from '../actions';

const mapStateToProps = (state, { match: { params } }) => ({
  todos: []
});

export default withRouter(connect(
  mapStateToProps,
  { toggleTodo: toggleTodo }
)(TodoList));
