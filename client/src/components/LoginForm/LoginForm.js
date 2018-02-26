import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      redirectTo: null
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  
  handleOnSubmit(event) {
    event.preventDefault();
		this.state = {
			email: '',
			password: '',
			redirectTo: 'login'
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
  }

  render() {
    return (
      <form>
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
        value={'Login'}
        className="btn btn-primary full-width"
        // onClick={toggleLoginMode}
        onSubmit={this.handleOnSubmit}
      />
    </form>
    );
  }
}

// LoginForm.propTypes = {
//   user: PropTypes.object,
//   manualLogin: PropTypes.func.isRequired,
//   signUp: PropTypes.func.isRequired,
//   toggleLoginMode: PropTypes.func.isRequired
// };

// function mapStateToProps({user}) {
//   return {
//     user
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ manualLogin, signUp, toggleLoginMode }, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
export default LoginForm;