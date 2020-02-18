import React, { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import List from '../components/List';
import { getTodos } from '../actions';
import { useQuery } from "../hooks";
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos } from '../selectors';
import CircularProgress from '../components/CircularProgress';
import Grid from '../components/Grid';

export default () => {
  const todos = useSelector(state => selectTodos(state));
  const isFetching = useSelector(state => state.todos.isFetching);
  const dispatch = useDispatch();
  const filter = useQuery('filter');

  useEffect(()=>{
    dispatch(getTodos(filter || 'all'));
  }, [filter, dispatch]);

  if (isFetching) return (
    <Grid container direction="row" justify="space-around">
      <CircularProgress />
    </Grid>
  );

  return(
    <List dense>
      { todos.map(todo => (<TodoListItem key={todo.id} todo={todo} />)) }
    </List>
  );
}
