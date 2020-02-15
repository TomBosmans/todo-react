import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';
import { VisibilityFilters } from '../constants';
import { useQuery } from "../hooks";

export default ({ filter, active, children }) => {
  const activeFilter = useQuery('filter') || VisibilityFilters.SHOW_ALL;

  return (
    <Button component={NavLink}
	    to={`list?filter=${filter}`}
	    disabled={filter === activeFilter}>
      {children}
    </Button>
  );
};
