import React, { useEffect } from 'react';

import Todo from './Todo';

import { getTodos } from '../actions';
import { useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux';


export default () => {
  const todos = useSelector(state => state.todos).data;
  const dispatch = useDispatch();
  const { filter } = useParams();

  useEffect(()=>{
    dispatch(getTodos(filter || 'all'));
  }, [filter, dispatch]);

  return(
    <ul>
      { todos.map(todo => (<Todo key={todo.id} todo={todo} />)) }
    </ul>
  );
}
