import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Page from '../../components/Page';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const { manualLogin, signUp, user: { isLogin } } = this.props;
    const email = ReactDOM.findDOMNode(this.refs.email).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;
    if (isLogin) {
      manualLogin({ email, password });
    } else {
      signUp({ email, password });
    }
  }

  // renderHeader() {
  //   const { user: { isLogin }, toggleLoginMode} = this.props;
  //   if (isLogin) {
  //     return (

  //     );
  //   }

  //   return (

  //   );
  // }

  render() {
    const {isWaiting, message, isLogin} = this.props.user;
    return (
      <div className="row">
      <div
        id="login"
        className="col-sm-8 col-md-6 col-lg-6 offset-sm-2 offset-md-3 offset-lg-3">
        <div id="login-logo" className="d-block mr-auto ml-auto mb-5" />
        <button
          type="submit"
          className="btn btn-primary d-block mr-auto ml-auto">
          {/* <GoogleIcon width={15} height={15} viewBox={'0 3 43 43'} /> Use Google Account */}
        </button>
        <div id="dialog-separator" className="mt-4 mb-4"> or
        </div>
        <form onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-primary full-width"
          />
        </form>
        <p id="signup">
          Don't have an account?
          <a href="#" data-toggle="modal" data-target="#signup-modal">
            Signup
          </a>
        </p>
      </div>
    </div>
    );
  }
}

LoginForm.propTypes = {
  user: PropTypes.object,
  manualLogin: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  toggleLoginMode: PropTypes.func.isRequired
};

function mapStateToProps({user}) {
  return {user};
}

export default connect(mapStateToProps, {})(LoginForm);

// manualLogin, signUp, toggleLoginMode