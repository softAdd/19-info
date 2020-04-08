import React from 'react';
import { AxiosRequestConfig } from 'axios';
import useFetch from 'hooks/useFetch';
import Grid from '@material-ui/core/Grid';
import CovidChart from 'components/CovidChart';
import CovidLive from 'components/CovidLive';
import CovidHistory from 'components/CovidHistory';


const fetchOptions: AxiosRequestConfig = { url: 'https://api.covid19api.com/country/russia/status/confirmed/live', method: 'get' }

const ContentGrid: React.FC = () => {
  const fetchSearch = useFetch(fetchOptions);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <CovidChart />
        <CovidLive />
        {fetchSearch.response ? <CovidHistory items={fetchSearch.response.data} /> : null}
      </Grid>
    </Grid>
  )
}

export default ContentGrid;