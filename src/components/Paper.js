import React from 'react';
import Paper from '@material-ui/core/Paper';

export default({children, ...options}) => (
  <Paper {...options}>
    {children}
  </Paper>
);
