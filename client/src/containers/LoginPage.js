import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import GoogleIcon from 'react-icons/lib/fa/google';
import LoginForm from '../components/LoginForm/LoginForm';


class LoginPage extends Component {
  state = {
    redirect: false
  }

  handleSubmit () {
    // axios.post(/**/)
    //   .then(() => this.setState({ redirect: true }));
  }

  render() {  
    return (
       <div id="splash-page-container" className="wrapper">
  
    <div className="row">
        <div id="login" className="col-sm-8 col-md-6 col-lg-6 offset-sm-2 offset-md-3 offset-lg-3">
          <div id="login-logo" className="d-block mr-auto ml-auto mb-5">
          </div>
          <a href="/auth/google" className="btn btn-primary d-block mr-auto ml-auto"><GoogleIcon width={15} height={15} viewBox={"0 3 43 43"}/> Use Google Account</a>
          <div id="dialog-separator" className="mt-4 mb-4">
            or
          </div>
          <LoginForm />     
          </div>
    </div> 
 

    </div>
    );  
  }
}
export default LoginPage;