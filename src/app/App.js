import React from 'react';
import PropTypes from 'prop-types';
import Page from './components/Page';
import { App as AppContainer}  from './components/Container';

const App = props => {
  return (
    <Page title="Login" id="loginpage">
      <AppContainer {...props} />
    </Page>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
