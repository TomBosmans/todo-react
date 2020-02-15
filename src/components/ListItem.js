import React from 'react';
import ListItem from '@material-ui/core/ListItem';

export default ({children, ...options}) => (
  <ListItem {...options}>
    {children}
  </ListItem>
);
