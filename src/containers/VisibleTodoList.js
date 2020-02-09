import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { getVisibleTodos } from '../reducers';
import { withRouter } from "react-router";
import { VisibilityFilters } from '../constants';

const mapStateToProps = (state, { match: { params } }) => ({
  todos: getVisibleTodos(state, params.filter || VisibilityFilters.SHOW_ALL)
});

export default withRouter(connect(
  mapStateToProps,
  { toggleTodo: toggleTodo }
)(TodoList));
