import React from 'react';
import List from '@material-ui/core/List';

export default ({children, ...options}) => (
  <List {...options}>
    {children}
  </List>
);
