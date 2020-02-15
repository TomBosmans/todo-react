import React from 'react';
import Grid from '@material-ui/core/Grid';

export default ({children, ...options}) => (
  <Grid {...options}>
    {children}
  </Grid>
);
