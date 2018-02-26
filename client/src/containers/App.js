import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../history';
import * as auth from '../actions/authActions';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  
  render() {
    return(
      <div>
        <Router history={history}>
          <div>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/login" component={LoginPage} />
              {/* <Route exact path="/register" component={LoginPage} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, auth)(App);