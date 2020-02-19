import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { updateTodo } from '../../actions';

import TextField from '../../components/TextField';
import InputAdornment from '../../components/InputAdornment';
import { SaveButton } from '../../components/IconButton';

const SubmitButton = () => (
  <InputAdornment position="start">
    <SaveButton type="submit"/>
  </InputAdornment>
);

export default ({ todo, afterUpdate }) => {
  const { id, text } = todo;
  const dispatch = useDispatch();
  const [input, setInput] = useState(text);
  const inputEl = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(updateTodo(id, { text: input }));
    afterUpdate();
  };

  useEffect(() => inputEl.current.focus(), []);

  return (
    <form onSubmit={onSubmit}>
      <TextField id={id}
	         label="Text" value={input} fullWidth
		 inputRef={inputEl}
		 InputProps={{ endAdornment: <SubmitButton/>}}
		 onInput={e => setInput(e.target.value)}/>
    </form>
  );
}
