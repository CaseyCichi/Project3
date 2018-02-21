import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Homepage from './Homepage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import OopsPage from './OopsPage';
import * as PrivateRoute from './Private';

// const Routes = ({ loggedIn }) => {
export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about" component={AboutPage} />
      {/* <PrivateRoute path="/login" component={LoginPage} loggedIn={ loggedIn } /> */}
      <Route component={OopsPage} />
    </Switch>
  );
};

// const mapStateToProps = state => ({
//   loggedIn: state.user.loggedIn,
// });

// export default connect(mapStateToProps, null)(Routes);