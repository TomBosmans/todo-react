import React from 'react';
import Button from '@material-ui/core/Button';

export default ({ children, ...options }) => (
  <Button {...options}>
    {children}
  </Button>
);
