import React, { Component } from 'react';
import dice from './dice.svg';
import './Dice.css';

class Dicer extends Component {
  render() {
    return (
      <div>
        <span onClick={this.props.dice} >
          <img src={dice} className="Dice" alt="dice" />
        </span>
        <span>{this.props.lastTeamAddedInto}</span>
      </div>
    )
  }

}

export default Dicer; 