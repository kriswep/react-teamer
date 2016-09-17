import React, { Component } from 'react';
import { Link } from 'react-router'
import logo from './logo.svg';
import './App.css';

import NavLink from './presentation/NavLink';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Temer</h2>
        </div>
        </Link>
        <ul>
          <li><NavLink to="/rules">Define Rules</NavLink></li>
          <li><NavLink to="/teams">Manage Teams</NavLink></li>
        </ul>
        
        {this.props.children}
      </div>
    );
  }
}

export default App;
