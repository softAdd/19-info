import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    minHeight: '400px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));