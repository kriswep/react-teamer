import React, { Component } from 'react';
import Message from './Message';
import dice from './dice.svg';
import './Dice.css';

class Dicer extends Component {
  render() {
    return (
      <div className='Dice-container'>
        <span className={this.props.inAction} onClick={this.props.dice} >
          <img src={dice} className="Dice" alt="dice" />
        </span>        
        <Message
          message={this.props.message}
          />
      </div>
    )
  }

}

export default Dicer; 