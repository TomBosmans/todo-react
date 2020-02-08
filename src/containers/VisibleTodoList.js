import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { getVisibleTodos } from '../reducers';

const mapStateToProps = state => ({
  todos: getVisibleTodos(state)
});

export default connect(
  mapStateToProps,
  { toggleTodo: toggleTodo }
)(TodoList);
