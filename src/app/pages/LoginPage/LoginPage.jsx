import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from '../../components/Page';

// import hourGlassSvg from '../images/hourglass.svg';

import { userAction } from '../../../actions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(event) {
    event.preventDefault();

    const { manualLogin, signUp, user: { isLogin } } = this.props;
    const email = 'ReactDOM.findDOMNode(this.refs.email).value';
    const password = 'ReactDOM.findDOMNode(this.refs.password).value';

    if (isLogin) {
      manualLogin({ email, password });
    } else {
      signUp({ email, password });
    }
  }

  renderHeader() {
    const { user: { isLogin }, toggleLoginMode } = this.props;
    if (isLogin) {
      return (
        <div className="header">
          <h1 className="heading">Login with Email</h1>
          <div className="alternative">
            Not what you want?
            <a className="alternative-link" onClick={toggleLoginMode}>
              Register an Account
            </a>
          </div>
        </div>
      );
    }
    return (
      <div className="header">
        <h1 className="heading">Register with Email</h1>
        <div className="alternative">
          Already have an account?
          <a className="alternative-link" onClick={toggleLoginMode}>
            Login
          </a>
        </div>
      </div>
    );
  }

  render() {
    const { isWaiting, message, isLogin } = this.props.user;

    return (
      <div className="login" waiting={isWaiting}>
        <div className="container">
          {this.renderHeader()}
          {/* <img className="loading" alt="loading" src={hourGlassSvg} /> */}
          <div className="email-container">
            <form onSubmit={this.handleOnSubmit}>
              <input
                className="input"
                type="email"
                ref="email"
                placeholder="email"
              />
              <input
                className="input"
                type="password"
                ref="password"
                placeholder="password"
              />
              <div className="hint">
                <div>Hint</div>
                <div>email: example@ninja.com password: ninja</div>
              </div>
              <p
                className="message"
                message-show={message && message.length > 0}>
                {message}
              </p>
              <input
                className="button"
                type="submit"
                value={isLogin ? 'Login' : 'Register'}
              />
            </form>
          </div>
          <div className="google-container">
            <h1 className="heading">Google Login Demo</h1>
            <a className="button" href="/auth/google">
              Login with Google
            </a>
          </div>
        </div>
      </div>
    );
  }
}

// mapStateToProps: assign information in store to be available inside component
const mapStateToProps = state => {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
};

// provide functions as props to your component that have access to the dispatch
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapDispatchToProps, mapStateToProps)(LoginPage);
