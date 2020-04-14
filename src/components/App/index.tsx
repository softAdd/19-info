import React from 'react';
import useFetch from 'hooks/useFetch';
import { AxiosRequestConfig } from 'axios';
import { CovidInfo } from 'types';
import { Grid, Container } from '@material-ui/core';
import CovidChart from 'components/CovidChart';
import CovidLive from 'components/CovidLive';
import CovidHistory from 'components/CovidHistory';
import SearchBar from 'components/SearchBar';

const fetchOptions: AxiosRequestConfig = { url: 'https://api.covid19api.com/country/russia/status/confirmed/live', method: 'get' }

const App: React.FC = () => {
  const fetchSearch = useFetch(fetchOptions);
  const fetchData: Array<CovidInfo> = fetchSearch?.response?.data;

  return (
    <Container maxWidth="lg" disableGutters component="main">
      <SearchBar />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CovidChart data={fetchData ? fetchData : []} />
          <CovidLive />
          {fetchData ? <CovidHistory items={fetchData} /> : null}
        </Grid>
      </Grid>
    </Container>

  )
}

export default App;