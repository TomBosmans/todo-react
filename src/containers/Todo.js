import React from 'react';
import { toggleTodo } from '../actions';
import { useDispatch } from 'react-redux';

export default ({ todo }) => {
  const { id, text, completed } = todo;
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(toggleTodo(todo));
  };

  return (
    <li onClick={onClick}
	style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      {text}
    </li>
  );
};
