import React, { Component } from 'react';

import Teams from './Teams';
import Rules from './Rules';

class Teamer extends Component {
  constructor(props) {
    //pass to parent
    super(props);
    //set initial state
    this.state = {
      rules: {
        members: 0
      },
      teams: []
    }
  }

  render() {
    return (
      <div>
      <Rules></Rules>
      <Teams></Teams>
      </div>
    )
  }
}

export default Teamer;
