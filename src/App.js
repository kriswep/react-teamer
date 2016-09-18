import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Teamer from './container/Teamer';



class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Teamer/>
      </MuiThemeProvider>
    );
  }
}

export default App;
