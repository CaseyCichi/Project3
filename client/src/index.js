import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.js';
import AddTaskForm from './components/d-add-task-form'
import NewProjectForm from './components/d-new-project-form'
import ProfileSettingsForm from './components/d-profile-settings-form'


import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
	<BrowserRouter>
	<div>

		<App url='http://localhost:3000/projectnames'
       pollInterval={2000}/>

		{/*Add Task Modal*/}
		<div className="modal fade" id="add-task-modal" role="dialog" aria-labelledby="addTaskModal" aria-hidden="true">
		    <div className="modal-dialog modal-dialog-centered" role="document">
		      <div className="modal-content">
		        <div className="modal-header">
		          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		            <span aria-hidden="true">&times;</span>
		          </button>
		        </div>
		        <div className="modal-body">
		            <h3 className="modal-title mb-3">New Task</h3>
		            <AddTaskForm />
		        </div>
		        <div className="modal-footer">
		        </div>
		      </div>
		    </div>
	    </div>

		{/*New Project Modal*/}
	    <div className="modal fade" id="new-project-modal" role="dialog" aria-labelledby="newProjectModal" aria-hidden="true">
		    <div className="modal-dialog modal-dialog-centered" role="document">
			    <div className="modal-content">
				    <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				        	<span aria-hidden="true">&times;</span>
				        </button>
				    </div>
				    <div className="modal-body">
					    <h3 className="modal-title mb-3">New Project</h3>
					    <NewProjectForm />
				    </div>
				    <div className="modal-footer">
				    </div>
			    </div>
		    </div>
  		</div>

  		{/*Profile Settings Modal*/}
  		<div className="modal fade" id="profile-modal" role="dialog" aria-labelledby="profileModal" aria-hidden="true">
	    	<div className="modal-dialog modal-dialog-centered" role="document">
		     	<div className="modal-content">
			        <div className="modal-header">
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
			        <span aria-hidden="true">&times;</span>
			        </button>
			        </div>
			        <div className="modal-body">
				        <h3 className="modal-title mb-3">Profile Settings</h3>
				        <ProfileSettingsForm />
			        </div>
			        <div className="modal-footer">
			        </div>
		      	</div>
	    	</div>
  		</div>
		
 	</div>

	</BrowserRouter>
	, document.getElementById('app-content')
);


