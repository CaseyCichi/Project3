import React, { Component } from 'react';
import Page from '../../components/Page';

import NavBar from '../../components/AddTaskForm';
import Header from '../../components/NewProjectForm';
import Content from '../../components/ProfileSettingsForm';

class Homepage extends Component {
  render() {
    return (
      <Page title="Homepage" id="homepage">
        <div className="Home">
          <NavBar />
          <Header />
          <Content />
        </div>
      </Page>
    );
  }
}
export default Homepage;
