import React from 'react';
import CreateButton from './CreateButton';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles((theme) => ({
 gridContainer:{
   padding: theme.spacing(2),
 },
 circleIcon: {
  color: theme.palette.primary.light,
  fontSize: '2.5rem'
 },
 surface: {
   padding: theme.spacing(3),
 }

}))

export default function CreateSection() {
  const classes = useStyles();
  return (
    <Paper className={classes.surface}>
      <Grid container>
        <Grid container item spacing={1} alignItems="center" className={classes.gridContainer}>
          <Grid item>
           <AddCircleOutlineIcon className={classes.circleIcon}/>
          </Grid>
          <Grid item>
            <Typography variant="h4" >
              Create
            </Typography>
          </Grid>
        </Grid>
        <Grid container item spacing={4} className={classes.gridContainer} justify="center">
          <CreateButton title="New Job"/>
          <CreateButton title="New Customer"/>
          <CreateButton title="New Employee"/>
          <CreateButton title="New Vendor"/>
          <CreateButton title="New Material" />
        </Grid>
      </Grid>
    </Paper>
  )
}
