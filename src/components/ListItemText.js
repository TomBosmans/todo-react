import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';

export default ({children, ...options}) => (
  <ListItemText {...options}>
    {children}
  </ListItemText>
);
