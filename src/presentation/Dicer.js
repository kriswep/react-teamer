import React, { Component } from 'react';
import dice from './dice.svg';
import './Dice.css';

class Dicer extends Component {
  render() {
    return (
      <div className='Dice-container'>
        <span className={this.props.inAction} onClick={this.props.dice} >
          <img src={dice} className="Dice" alt="dice" />
        </span>
        <span>{this.props.lastTeamName}</span>
      </div>
    )
  }

}

export default Dicer; 