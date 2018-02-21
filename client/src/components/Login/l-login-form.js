import React from "react";

class LoginForm extends React.Component {
	constructor(props) {
	super(props);
	this.state = {
	  email: '',
	  password: '',
	};
	this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  	}

	handleSubmit(event) {
	{/*Need to setup POST to db here*/}

	 alert('Email: ' + this.state.email + ' | Password: ' + this.state.password );
     event.preventDefault();
     this.resetForm();
  	}

  	resetForm() {
  	this.setState({
    email: '',
    password: '',
  	});
	}

	render(){
		return(
		<form onSubmit={this.handleSubmit}>
				    <div className="form-group">
					    <label>Email Address</label>
					    <input type="email" name="email" className="form-control" value={this.state.email}
            	onChange={this.handleChange}  placeholder="Enter email" />
				    </div>
				    <div className="form-group">
					    <label>Password</label>
					    <input type="password" name="password" className="form-control" value={this.state.password}
            	onChange={this.handleChange}  placeholder="Password" />
				    </div>
				<input type="submit" value="Login" className="btn btn-primary full-width" />		
		</form>
		);
	}
};

export default LoginForm;

