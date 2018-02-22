import React from 'react';
import PropTypes from 'prop-types';
import Messages from '../Messages';

const App = ({ children }) => {
  return (
    <div id="app-content">
      <Messages />
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
