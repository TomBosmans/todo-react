import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default ({children, ...options}) => (
  <Checkbox {...options}>
    {children}
  </Checkbox>
);
