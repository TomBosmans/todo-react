import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { toggleTodo, destroyTodo } from '../actions';

import ListItem from '../components/ListItem';
import ListItemText from '../components/ListItemText';
import ListItemIcon from '../components/ListItemIcon';
import ListItemSecondaryAction from '../components/ListItemSecondaryAction';
import Checkbox from '../components/Checkbox';
import ToggleableMenu from '../components/ToggleableMenu';
import MenuItem from '../components/MenuItem';

import EditForm from './TodoEditForm';

export default ({ todo }) => {
  const { id, text, completed } = todo;
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const enableEditing =() => setIsEditing(true);
  const disableEditing = () => setIsEditing(false);
  const destroy = () => dispatch(destroyTodo(id));
  const toggle = () => {
    if (!isEditing) dispatch(toggleTodo(todo));
  };

  const ListBody = () => {
    if (isEditing) return <EditForm todo={todo} afterUpdate={disableEditing} />;
    return <ListItemText primary={text}/>;
  };
  
  return (
    <ListItem key={id} dense button onClick={toggle} disableRipple={isEditing}>
      <ListItemIcon>
        <Checkbox edge="start" checked={completed} disableRipple/>
      </ListItemIcon>
      <ListBody />
      <ListItemSecondaryAction>
	<ToggleableMenu>
	  <MenuItem onClick={enableEditing}>Edit</MenuItem>
	  <MenuItem onClick={destroy}>Delete</MenuItem>
	</ToggleableMenu>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
