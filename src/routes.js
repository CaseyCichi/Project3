import React from 'react';
import { Route, Redirect } from 'react-router';
import './style.css';
import App from './app/App';
import HomePage from './app/pages/LoginPage';
import LoginPage from './app/pages/LoginPage';
import Dashboard from './app/pages/Dashboard';


export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (!authenticated) {
      replace({ pathname: '/login', state: { nextPathname: nextState.location.pathname } });
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
    <Route path="/" component={App}>
      <Redirect from="/" to="home" />
      <Route path="home"component={HomePage}/>
      <Route path="login" component={LoginPage} onEnter={redirectAuth} />
      <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
    </Route>
  );
};
