import React, { Component } from 'react';
import './style.css';

import {
  Route,
} from 'react-router-dom'

import Home from './components/views/home';
import Dashboard from './components/views/dashboard';
import Login from './components/views/login';


class App extends Component {
  render() {
    return (
         <div id="whole-page-container" className="wrapper">
          <Route exact path="/" component={Home}/>
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login}/>
        </div>
    );
  }
}

export default App;
