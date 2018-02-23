import React from 'react';
import { Route, Redirect } from 'react-router';
import './style.css';
import App from './app/App';
import HomePage from './app/pages/LoginPage';
import AboutPage from './app/pages/AboutPage';
import LoginPage from './app/pages/LoginPage';
import Dashboard from './app/pages/Dashboard';
import OopsPage from './app/pages/OopsPage';

export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (!authenticated) {
      replace({ pathname: '/home', state: { nextPathname: nextState.location.pathname } });
    }
    callback();
  };
  const redirectAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (authenticated) {
      replace({
        pathname: '/'
      });
    }
    callback();
  };
  return (
    <div>
    <Route path="/" component={App}>
      <Route exact path="/login" component={LoginPage} onEnter={redirectAuth}/>
      <Route path="/home"component={HomePage}/>
      <Route path="/dashboard" component={Dashboard} onEnter={requireAuth} />
      <Route component={OopsPage} />
    </Route>
    </div>
  );
};