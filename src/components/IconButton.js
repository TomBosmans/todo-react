import React from 'react';
import IconButton from '@material-ui/core/IconButton';

export default ({children, ...options}) => (
  <IconButton {...options}>
    {children}
  </IconButton>
);
