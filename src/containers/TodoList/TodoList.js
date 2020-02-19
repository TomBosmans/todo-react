import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTodos } from '../../actions';
import { useQuery } from "../../hooks";
import { selectTodos } from '../../selectors';
import { VisibilityFilters } from '../../constants';

import List from '../../components/List';
import CircularProgress from '../../components/CircularProgress';
import Grid from '../../components/Grid';

import TodoListItem from '../TodoListItem';

export default () => {
  const todos = useSelector(state => selectTodos(state));
  const isFetching = useSelector(state => state.todos.isFetching);
  const filter = useQuery('filter') || VisibilityFilters.SHOW_ALL;
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getTodos(filter));
  }, [filter, dispatch]);

  const Progress = () => (
    <Grid container direction="row" justify="space-around">
      <CircularProgress />
    </Grid>
  );

  const TodoList = () => (
    <List dense>
      { todos.map(todo => (<TodoListItem key={todo.id} todo={todo} />)) }
    </List>
  );
  
  return isFetching ? <Progress/> : <TodoList/>;
}
