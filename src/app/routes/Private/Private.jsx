import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Private = ({ component: Component, ...rest, loggedIn }) => (
  <Route 
    {...rest} 
      render={props => ( loggedIn ? ( 
        <Component {...props} /> ) : ( 
        <Redirect to={{ 
          pathname: '/login',  
          state: { from: props.location }}} 
        /> )
      )} 
    />
);
export default Private;
