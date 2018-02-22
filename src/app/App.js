import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { removeNotification } from '../actions/notification';
import AddTaskForm from './components/AddTaskForm';
import NewProjectForm from './components/NewProjectForm';
import ProfileSettingsForm from './components/ProfileSettingsForm';
import SignupForm from './components/SignupForm';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div id="app-content">
        <Routes/>
      </div>
    );
  }
}

export default App;
