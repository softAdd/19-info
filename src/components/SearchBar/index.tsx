import React from 'react';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const SearchBar: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={3}>SearchBar</Paper>
      </Grid>
    </Grid>
  )
}

export default SearchBar;