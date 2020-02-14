import React from 'react';
import { NavLink } from 'react-router-dom';
import { VisibilityFilters } from '../constants';

export default ({ filter, children }) => (
  <NavLink to={`list?filter=${filter}`}>
    {children}
  </NavLink>
);
