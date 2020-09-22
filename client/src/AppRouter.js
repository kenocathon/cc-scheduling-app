import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login';
import { CssBaseline } from '@material-ui/core';

const AppRouter = () => {
  return(
    <>
    <Switch>
      <Route exact path='/' component={Login} /> 
      <Route path='/dashboard' component={Dashboard} />
    </Switch>
    <CssBaseline/>
    </>
  )
}

export default AppRouter;