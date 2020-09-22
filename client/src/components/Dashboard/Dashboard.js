import React, {useEffect, useState} from 'react';
import { makeStyles} from '@material-ui/core';
import { hasCorrectRole } from '../../api/auth/api-auth';
import { findId, findUserRole } from '../../api/auth/api-auth';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import CreateSection from './CreateSection'
import Header from '../Header'




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: '3rem'
  },
  container: {
    width: '90%',
    marginTop: '4rem'
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [userRole, setUserRole] = useState('')

  useEffect(() => {
    const userId = findId()
    const role = findUserRole()
    console.log(role)
    hasCorrectRole(userId, role).then(data => {
      if(!data.error){
        setUserRole()
      }
    })
  }, [])

  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <Header/>
      <main className={classes.content}>
        <Container className={classes.container} maxWidth="xl">
          <CreateSection />
        </Container>
         
        <Box pt={4}>
          <Copyright />
        </Box>
      </main>
    </div>
  );
}
export default Dashboard;