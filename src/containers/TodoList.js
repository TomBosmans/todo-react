import React, { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import List from '../components/List';
import { getTodos } from '../actions';
import { useQuery } from "../hooks";
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos } from '../selectors';

export default () => {
  const todos = useSelector(state => selectTodos(state));
  const dispatch = useDispatch();
  const filter = useQuery('filter');

  useEffect(()=>{
    dispatch(getTodos(filter || 'all'));
  }, [filter, dispatch]);

  return(
    <List dense>
      { todos.map(todo => (<TodoListItem key={todo.id} todo={todo} />)) }
    </List>
  );
}
