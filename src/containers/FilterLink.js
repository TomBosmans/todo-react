import React from 'react';
import { NavLink } from 'react-router-dom';
import { VisibilityFilters } from '../constants';

const FilterLink = ({ filter, children }) => (
  <NavLink to={filter === VisibilityFilters.SHOW_ALL ? '/' : `/${filter}`}
	   activeStyle={{ textDecoration: 'none', color: 'black' }}>
    {children}
  </NavLink>
);

export default FilterLink;
