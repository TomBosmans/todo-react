import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from './Icon';

export default IconButton;

export const AddButton = ({children, ...options}) => (
  <IconButton {...options} color='primary' size='small'>
    <Icon>add_circle</Icon>
  </IconButton>
);

export const SaveButton = ({children, ...options}) => (
  <IconButton {...options} color='primary' size='small'>
    <Icon>save</Icon>
  </IconButton>
);

export const DeleteButton = ({children, ...options}) => (
  <IconButton {...options} size='small'>
    <Icon>delete</Icon>
  </IconButton>
);

export const MoreButton = ({children, ...options}) => (
  <IconButton {...options} size='small'>
    <Icon>more_horiz</Icon>
  </IconButton>
);
