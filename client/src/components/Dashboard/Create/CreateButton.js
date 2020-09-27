import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  button: {
    padding: theme.spacing(2),
    fontSize: '1.2rem'
  },
  
}));

export default function CreateButton(props) {
  const classes = useStyles();
  return (
    <Grid item >
      <Button variant='outlined' color='primary' className={classes.button}>{props.title} </Button>
    </Grid>
    
  );
}