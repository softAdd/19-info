import React, { useRef, useEffect } from 'react';
import { useStyles } from './styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { select } from 'd3';

interface Props {
  data: Array<any>
}

const SearchBar: React.FC<Props> = ({ data }) => {
  const classes = useStyles();
  const chartRef = useRef(null);
  const cases = data.map(({ Cases }) => Cases);

  useEffect(() => {
    const svg = select(chartRef.current);

    // svg.append('g').call()
    // svg
    //   .selectAll('circle')
    //   .data(cases)
    //   .join(
    //     enter => 
    //       enter
    //       .append('circle')
    //       .attr('class', 'new')
    //       .attr('r', value => value)
    //       .attr('cx', value => value * 2)
    //       .attr('cy', value => value * 2)
    //       .attr('stroke', 'red'),
    //     update => update.attr('class', 'updated'),
    //     exit => exit.remove()
    //   );
  }, [cases])

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={1}>
          <svg height={200} ref={chartRef}></svg>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default SearchBar;