import React from 'react';
import Container from '@material-ui/core/Container';

export default ({ children, ...options }) => (
  <Container {...options}>
    {children}
  </Container>
);
