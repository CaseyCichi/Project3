import React, { Component } from 'react';
import Page from '../../components/Page';
import LoginForm from '../../components/Login';

class LoginPage extends Component {
  render() {
    return (
      <Page title="LoginPage" id="login">
        <LoginForm {...this.props} />
      </Page>
    );
  }
}

export default LoginPage;