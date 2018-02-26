import React, { Component } from 'react';
import Nav from './Nav';
import Splash from './Splash';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Splash/>
      </div>
    );
  }
}
export default HomePage;