import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Teamer from './container/Teamer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Teamer</h2>
        </div>

        <Teamer/>
      </div>
    );
  }
}

export default App;
