import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import './index.css';

import App from './App';
import Teams from './container/Teams';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>      
      <Route path="/teams" component={Teams}/>
    </Route>
  </Router>
), document.getElementById('root'));
