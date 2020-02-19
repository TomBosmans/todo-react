import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button';
import { VisibilityFilters } from '../../constants';
import { useQuery } from "../../hooks";

export default ({ filter, active, children }) => {
  const activeFilter = useQuery('filter') || VisibilityFilters.SHOW_ALL;
  const isDisabled = filter === activeFilter;

  return (
    <Button component={NavLink}
            to={`list?filter=${filter}`}
            disabled={isDisabled}>
      {children}
    </Button>
  );
};
