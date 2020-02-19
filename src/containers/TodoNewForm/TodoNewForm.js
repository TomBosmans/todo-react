import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createTodo } from '../../actions';

import TextField from '../../components/TextField';
import InputAdornment from '../../components/InputAdornment';
import { AddButton } from '../../components/IconButton';

export default () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (!input.trim()) return;

    dispatch(createTodo({ text: input, completed: false }));
    setInput('');
  };

  const SubmitButton = () => (
    <InputAdornment position="start">
      <AddButton type="submit"/>
    </InputAdornment>
  );
  
  return (
    <form onSubmit={onSubmit} style={{margin: '10px'}}>
      <TextField label="New Todo" value={input} fullWidth
		 InputProps={{ endAdornment: <SubmitButton/>}}
		 onInput={event => setInput(event.target.value)}/>
    </form>
  );
}
