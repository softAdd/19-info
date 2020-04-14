import React from 'react';
import moment from 'moment';
import { useStyles } from './styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CovidInfo } from 'types';

interface IContentListProps {
  items: Array<CovidInfo>
}

const CovidHistory: React.FC<IContentListProps> = ({ items }) => {
  const classes = useStyles();
  const sortedItems = items.slice().reverse()

  return (
    <>
      {sortedItems.slice(0, 10).map((item, id) => (
        <ExpansionPanel key={`${item.Cases}-${item.Date}-${id}`}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${item.Date}-content`}
          >
            <Typography className={classes.heading}>{`${item.Country}: ${moment(item.Date).startOf('day').fromNow()}`}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              {`${moment(item.Date).format('LL')}: ${item.Cases} ${item.Status} cases in ${item.Country}.`}
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </>
  )
}

export default CovidHistory;