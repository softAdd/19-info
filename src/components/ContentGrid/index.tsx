import React from 'react';
import { AxiosRequestConfig } from 'axios';
import useFetch from 'hooks/useFetch';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import ContentList from 'components/ContentList';


const fetchOptions: AxiosRequestConfig = { url: 'https://api.covid19api.com/country/russia/status/confirmed/live', method: 'get' }

const ContentGrid: React.FC = () => {
  const classes = useStyles();
  const fetchSearch = useFetch(fetchOptions);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={3}>
          {fetchSearch.response ? <ContentList items={fetchSearch.response.data} /> : null}
        </Paper>
      </Grid>
    </Grid>
  )
}

export default ContentGrid;