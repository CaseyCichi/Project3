import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SideBar from '../components/SideBar/sidebar'
import MainContent from '../components/MainContent/MainContent'



class Dashboard extends Component {
  
  render() {
    return(
      <div id="whole-page-container" className="wrapper">
        <div className='row no-gutters'>
          <SideBar />
          <MainContent />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default withRouter(connect(mapStateToProps)(Dashboard));