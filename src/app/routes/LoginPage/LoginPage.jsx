import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Page from '../../components/Page';
import LoginForm from '../../components/Login'

class LoginPage extends Component {
  render() {
    return (
      <Page>
        <LoginForm {...this.props} />
      </Page>
    );
  }
}

export default LoginPage;