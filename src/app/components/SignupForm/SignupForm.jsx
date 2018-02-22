import React from "react";

class SignupForm extends React.Component {
	constructor(props) {
	super(props);
	this.state = {
	  firstName: '',
	  lastName: '',
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

	 alert('First Name: ' + this.state.firstName + ' | Last Name: ' + this.state.lastName + ' | Email: ' + this.state.email + ' | Password: ' + this.state.password);
     event.preventDefault();
     this.resetForm();
  	}

  	resetForm() {
  	this.setState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  	});
	}

	render(){
		return(
		
			<form onSubmit={this.handleSubmit}>
	      	  <div className="form-group">
	      	  	<ul className="modal-list">
	      	  	  <li>
			      <label>First Name</label>
			      <input type="text" name="firstName" className="form-control" value={this.state.firstName}
				  onChange={this.handleChange}  placeholder="First name" />
			      </li>
			      <li>
			      <label >Last Name</label>
			      <input type="text" name="lastName" className="form-control" value={this.state.lastName}
				  onChange={this.handleChange}  placeholder="Last name" />
			      </li>
			    </ul>
		      </div>
		      <div className="form-group">
			      <label className="mt-3">Email Address</label>
			      <input type="email" name="email" className="form-control" value={this.state.email}
			      onChange={this.handleChange}  placeholder="Enter email" />
		      </div>
		      <div className="form-group">
			      <label >Password</label>
			      <input type="password" name="password" className="form-control" value={this.state.password}
				  onChange={this.handleChange}  placeholder="Password" />
		      </div>
				  <input type="submit" value="Submit" className="btn btn-primary full-width" />
	        </form>

		);
	}
};

export default SignupForm;

