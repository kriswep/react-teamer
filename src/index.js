import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import './index.css';

import App from './App';
import Teams from './container/Teams';
import Rules from './container/Rules';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>      
      <Route path="/teams" component={Teams}/>      
      <Route path="/rules" component={Rules}/>
    </Route>
  </Router>
), document.getElementById('root'));
