import React, { Component } from "react";
import SideBar from '../../components/SideBar';
import MainContent from '../../components/MainContent';

class Dashboard extends Component {
render() {
    return (
      <div id="whole-page-container" className="wrapper">
        <div className='row no-gutters'>
          <SideBar />
          <MainContent />
        </div>
      </div>
    );
  }
}

export default Dashboard;
