import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomePage from '../components/HomePage';
import Dashboard from './Dashboard';


class LandingPage extends Component {
  render() {
    const auth = this.props.state;
    return (
     <div>
       { auth ? <Dashboard /> : <HomePage />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(LandingPage);