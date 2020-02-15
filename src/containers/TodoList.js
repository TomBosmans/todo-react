import React, { useEffect } from 'react';
import TodoListItem from './TodoListItem';
import List from '../components/List';
import { getTodos } from '../actions';
import { useQuery } from "../hooks";
import { useSelector, useDispatch } from 'react-redux';

export default () => {
  const todos = useSelector(state => state.todos).data;
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
