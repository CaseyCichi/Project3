import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Homepage, AboutPage, LoginPage, OopsPage } from './pages';

export default store => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated } } = store.getState();
    if (!authenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    callback();
  };

  const redirectAuth = (nextState, replace, callback) => {
    const { user: { authenticated } } = store.getState();
    if (authenticated) {
      replace({
        pathname: '/'
      });
    }
    callback();
  };

  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route component={OopsPage} />
    </Switch>
  );
};
