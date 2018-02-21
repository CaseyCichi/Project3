import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GoogleIcon from 'react-icons/lib/fa/google';
import { manualLogin, signUp, toggleLoginMode } from '../../../actions/user';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      username: '',
      password: '',
      submitted: false
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const { manualLogin, signUp, user: { isLogin } } = this.props;
    const { email, password } = this.state;

    if (isLogin) {
      manualLogin({ email, password });
    } else {
      signUp({ email, password });
    }
  }

  render() {
    const { isWaiting, message, isLogin } = this.props.user;
    return (
      <div className="row">
        <div
          id="login"
          className="col-sm-8 col-md-6 col-lg-6 offset-sm-2 offset-md-3 offset-lg-3">
          <div id="login-logo" className="d-block mr-auto ml-auto mb-5" />
          <button
            type="submit"
            className="btn btn-primary d-block mr-auto ml-auto">
            <GoogleIcon width={15} height={15} viewBox={'0 3 43 43'} /> Use
            Google Account
          </button>
          <div id="dialog-separator" className="mt-4 mb-4">
            or
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

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, {
  manualLogin,
  signUp,
  toggleLoginMode
})(LoginForm);
