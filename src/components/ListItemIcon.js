import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';

export default ({children, ...options}) => (
  <ListItemIcon {...options}>
    {children}
  </ListItemIcon>
)
