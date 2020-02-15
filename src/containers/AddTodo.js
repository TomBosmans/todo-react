import React, { useState } from 'react';
import { createTodo } from '../actions';
import { useDispatch } from 'react-redux';
import TextField from '../components/TextField';
import InputAdornment from '../components/InputAdornment';
import { AddButton } from '../components/buttons';

const SubmitButton = () => (
  <InputAdornment position="start">
    <AddButton type="submit"/>
  </InputAdornment>
);

export default () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (!input.trim()) return;

    dispatch(createTodo({ text: input, completed: false }));
    setInput('');
  };
  
  return (
    <form onSubmit={onSubmit} style={{margin: '10px'}}>
      <TextField label="New Todo" value={input} fullWidth
		 InputProps={{ endAdornment: <SubmitButton/>}}
		 onInput={e => setInput(e.target.value)}/>
    </form>
  );
}
