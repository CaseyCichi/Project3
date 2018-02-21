import React from "react";

class AddTaskForm extends React.Component {
	constructor(props) {
	super(props);
	this.state = {
	  taskName: '',
	  taskDesc: '',
	  taskDate: 'mm/dd/yyyy'
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

	 alert('Task Name: ' + this.state.taskName + ' | Task Description: ' + this.state.taskDesc + ' | Task Date: ' + this.state.taskDate);
     event.preventDefault();
     this.resetForm();
  	}

  	resetForm() {
  	this.setState({
    taskName: '',
    taskDesc: '',
    taskDate: '',
  	});
	}

	render(){
		return(
		<form onSubmit={this.handleSubmit}>
          	<div className="form-group">
                <ul className="modal-list" >
	                <li>
		              	<label>Assignee</label>
		              	{/*Need to figure out how to do autocomplete input from users table in db*/}
		             	<input type="text" className="form-control" id="assignee1" aria-describedby="emailHelp" placeholder="Add assignee" />
	             	</li>
	              	<li>
		              	<label>Project Name</label>
		              	{/*Need to figure out how to do autocomplete input from user/projects table in db*/}
		              	<input type="text" className="form-control" id="projectName1" aria-describedby="emailHelp" placeholder="Project name" />
	              	</li>
             	</ul>
        	</div>
        	<div className="form-group">
              	<label className="mt-3">Task Name</label>
              	<input type="text" name="taskName" className="form-control" value={this.state.taskName}
            	onChange={this.handleChange}  placeholder="Task name" />
        	</div>
     		<a data-toggle="collapse" href="#task-description" role="button" aria-expanded="false" aria-controls="collapseExample">Description</a>
      		<div className="collapse" id="task-description">
              	<div>
	                <div className="form-group">
	               		 <textarea className="form-control" name="taskDesc" value={this.state.taskDesc}
            	onChange={this.handleChange} rows="3"></textarea>
	                </div>
              	</div>
      		</div>
        	<a data-toggle="collapse" href="#task-due-date" role="button" aria-expanded="false" aria-controls="collapseExample">Due Date</a>
        	<div className="collapse" id="task-due-date">
              	<div>
	                <div className="form-group">
	                	<input type="date" name="taskDate" value={this.state.taskDate} onChange={this.handleChange} className="form-control" />
	                </div>
                </div>
        	</div>
       		<a data-toggle="collapse" href="#task-attachment" role="button" aria-expanded="false" aria-controls="collapseExample">Attachment</a>
        	<div className="collapse" id="task-attachment">
              	<div>
	                <div className="form-group">
	                	<input
				            type="file"
				            ref={input => {
				              this.fileInput = input;
				            }}
			          	/>
	              	</div>
            	</div>
        	</div>
        	<input type="submit" value="Submit" className="btn btn-primary full-width" />
		</form>
		);
	}
};

export default AddTaskForm;

