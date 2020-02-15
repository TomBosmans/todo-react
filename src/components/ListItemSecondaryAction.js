import React from 'react';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

export default ({children, ...options}) => (
  <ListItemSecondaryAction>
    {children}
  </ListItemSecondaryAction>
)
