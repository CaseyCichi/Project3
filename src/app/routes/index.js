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
<div>
      <Route  path="/" component={Homepage} />
      <Route  path="/about" component={AboutPage} />
      <Route  path="/dashboard" component={Dashboard}/>
      {/* <Route exact path="/login" component={LoginPage}/> */}
      <Route component={OopsPage} />
      </div>    
  );
};