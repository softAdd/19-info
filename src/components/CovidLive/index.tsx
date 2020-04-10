import React from 'react';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import useFetch from 'hooks/useFetch';
// import axios from 'axios';

const CovidLive: React.FC = () => {
  const classes = useStyles();
  // const fetchRussiaCases = useFetch({ url: 'https://www.trackcorona.live/api/countries/' });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={1}>
          {/* <p>Today's cases in Russia: {fetchRussiaCases.response ? JSON.stringify(fetchRussiaCases.response.data) : 'unknown'}</p>
          <p>Today's cases in Russia: {fetchRussiaCases.response ? JSON.stringify(fetchRussiaCases.response.data) : 'unknown'}</p>
          <p>Today's cases in Russia: {fetchRussiaCases.response ? JSON.stringify(fetchRussiaCases.response.data) : 'unknown'}</p> */}
        </Paper>
      </Grid>
    </Grid>
  )
}

export default CovidLive;