import React from "react";

class NewProjectForm extends React.Component {
	constructor(props) {
	super(props);
	this.state = {
	  projectName: '',
	  projectDesc: ''
	};
	this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

  	}

	handleSubmit(event) {
	{/*Need to setup POST to db here
	axios.post('/user', {
    projectName: 'this.state.projectName',
    projectDesc: 'this.state.projectDesc',
  	})
  	.then(function (response) {
    console.log(response);
  	})
  	.catch(function (error) {
    console.log(error);
  	});
	*/}

	 alert('Project Name: ' + this.state.projectName + ' | Project Description: ' + this.state.projectDesc);
     event.preventDefault();
     this.resetForm();
  	}

  	resetForm() {
  	this.setState({
    projectName: '',
    projectDesc: ''
  	});
	}

	render(){
		return(
		<form onSubmit={this.handleSubmit}>
		    <div className="form-group">
			    <label className="mt-3">Project Name</label>
			    <input type="text" name="projectName" className="form-control" value={this.state.projectName}
            	onChange={this.handleChange} placeholder="Project name" />
		    </div>
		    <div className="form-group">
			    <label className="mt-3">Description</label>
			    <textarea className="form-control" name="projectDesc" value={this.state.projectDesc}
            	onChange={this.handleChange} rows="3"></textarea>
		    </div>
		    <input type="submit" value="Submit" className="btn btn-primary full-width"/>
	    </form>
		);
	}
};

export default NewProjectForm;

