import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Homepage from './Homepage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import OopsPage from './OopsPage';
import * as PrivateRoute from './Private';
import Dashboard from './Dashboard';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/dashboard" component={Dashboard}/>
      {/* <Route exact path="/login" component={LoginPage}/> */}
      <Route component={OopsPage} />
    </Switch>
  );
};