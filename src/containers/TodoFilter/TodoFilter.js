import React from 'react';
import { VisibilityFilters } from '../../constants';
import Grid from '../../components/Grid';
import FilterButton from '../TodoFilterButton';


export default () => (
  <Grid container direction="row" justify="space-around" alignItems="baseline">
    <FilterButton filter={VisibilityFilters.SHOW_ALL}>All</FilterButton>
    <FilterButton filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterButton>
    <FilterButton filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterButton>
  </Grid>
);
