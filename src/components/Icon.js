import React from 'react';
import Icon from '@material-ui/core/Icon';

export default ({children, ...options}) => (
  <Icon {...options}>
    {children}
  </Icon>
)
