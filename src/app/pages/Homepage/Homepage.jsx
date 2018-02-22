import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from '../../components/Page';

import AddTaskForm from './components/AddTaskForm';
import NewProjectForm from './components/NewProjectForm';
import ProfileSettingsForm from './components/ProfileSettingsForm';
import SignupForm from './components/SignupForm';

class Homepage extends Component {
  render() {
    return (
      <Page title="Homepage" id="homepage">
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
      </Page>
    );
  }
}

// const mapDispatchToProps = dispatch => bindActionCreators({ addNotification }, dispatch);

export default Homepage;
