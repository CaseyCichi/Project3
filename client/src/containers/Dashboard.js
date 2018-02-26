import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AddTaskForm from '../components/AddTaskForm/AddTaskForm';
import NewProjectForm from '../components/NewProjectForm/NewProjectForm';
import ProfileSettingsForm from '../components/ProfileSettingsForm/ProfileSettingsForm';


class Dashboard extends Component {
  
  render() {
    return(
      <div>
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
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(Dashboard));