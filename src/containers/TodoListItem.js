import React from 'react';
import { toggleTodo } from '../actions';
import { useDispatch } from 'react-redux';
import ListItem from '../components/ListItem';
import ListItemText from '../components/ListItemText';
import ListItemIcon from '../components/ListItemIcon';
import Checkbox from '../components/Checkbox';

export default ({ todo }) => {
  const { id, text, completed } = todo;
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(toggleTodo(todo));
  };

  return (
    <ListItem key={id} onClick={onClick} button>
      <ListItemIcon>
        <Checkbox edge="start"
		  checked={completed}
		  tabIndex={-1}
		  disableRipple/>
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};
