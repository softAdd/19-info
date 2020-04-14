import React, { useRef, useEffect } from 'react';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { select } from 'd3';
import { CovidInfo, ChartItem } from 'types';

interface Props {
  data: Array<CovidInfo>
}

const SearchBar: React.FC<Props> = props => {
  const classes = useStyles();
  const chartRef = useRef(null);
  const data: Array<ChartItem> = props.data.map((dataItem) => {
    return {
      cases: dataItem.Cases,
      date: dataItem.Date,
    }
  });

  useEffect(() => {
    const ctx = select(chartRef.current);
  }, [data])

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={1}>
          <svg height={200} ref={chartRef}>
            <path d="M0,0 10,10 80,30, 50,100" stroke="blue" fill="none" />
          </svg>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default SearchBar;