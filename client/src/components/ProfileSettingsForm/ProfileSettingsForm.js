import React from "react";

class ProfileSettingsForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	render(){
		return(
		<form>
	        <div className="form-group">
		        <label>Change Display Username</label>
		        <input type="email" className="form-control" id="Username1" aria-describedby="emailHelp" placeholder="Show current display name here" />
	        </div>
	        <div className="form-group">
		        <label>Change Email Address</label>
		        <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Show current email address here" />
	        </div>
	        <div className="form-group">
		        <label>Change Password</label>
		        <input type="password" className="form-control" id="ChangePassword1" placeholder="Current Password" />
	        </div>
	        <div className="form-group">
	        	<input type="password" className="form-control" id="ChangePassword2" placeholder="New Password" />
	        </div>
	        <button type="submit" className="btn btn-primary full-width">Update</button>
        </form>
		);
	}
};

export default ProfileSettingsForm;

