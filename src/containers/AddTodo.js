import React from 'react';
import { createTodo } from '../actions';
import { useDispatch } from 'react-redux';

export default () => {
  const dispatch = useDispatch();

  let input;
  const onSubmit = (event) => {
    event.preventDefault();
    if (!input.value.trim()) return;

    dispatch(createTodo({ text: input.value, completed: false }));
    input.value = '';    
  };
	
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
