import React from 'react'
import { Link } from 'react-router'

import './NavLink.css';

export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
})