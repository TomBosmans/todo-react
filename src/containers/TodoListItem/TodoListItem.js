import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { toggleTodo, destroyTodo } from '../../actions';

import ListItem from '../../components/ListItem';
import ListItemText from '../../components/ListItemText';
import ListItemIcon from '../../components/ListItemIcon';
import ListItemSecondaryAction from '../../components/ListItemSecondaryAction';
import Checkbox from '../../components/Checkbox';
import ToggleableMenu from '../../components/ToggleableMenu';
import MenuItem from '../../components/MenuItem';
import ClickAwayListener from '../../components/ClickAwayListener';

import EditForm from '../TodoListItemEdit';

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

  if (isEditing) return (
    <ClickAwayListener onClickAway={disableEditing}>
      <div style={{ paddingLeft: '16px', paddingRight: '16px' }}>
	<EditForm todo={todo} afterUpdate={disableEditing}/>
      </div>
    </ClickAwayListener>
  );

  return (
    <ListItem button onClick={toggle} disableRipple={isEditing}>
      <ListItemIcon>
        <Checkbox edge="start" checked={completed} disableRipple/>
      </ListItemIcon>
      <ListItemText primary={text}/>
      <ListItemSecondaryAction>
	<ToggleableMenu>
	  <MenuItem onClick={enableEditing}>Edit</MenuItem>
	  <MenuItem onClick={destroy}>Delete</MenuItem>
	</ToggleableMenu>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
