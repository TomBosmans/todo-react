import React from 'react';
import IconButton from '../IconButton';
import Icon from '../Icon';

export const AddButton = ({children, ...options}) => (
  <IconButton {...options} color='primary' size='small'>
    <Icon>add_circle</Icon>
  </IconButton>
);
