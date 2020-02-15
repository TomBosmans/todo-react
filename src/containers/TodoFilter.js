import React, { Fragment } from 'react';
import { VisibilityFilters } from '../constants';
import { NavLink } from 'react-router-dom';
import FilterButton from './FilterButton';
import Grid from '../components/Grid';

export default () => (
  <Grid container direction="row" justify="space-around" alignItems="baseline">
    <FilterButton filter={VisibilityFilters.SHOW_ALL}>All</FilterButton>
    <FilterButton filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterButton>
    <FilterButton filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterButton>
  </Grid>
);
