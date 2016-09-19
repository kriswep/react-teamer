import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import Teams from '../container/Teams';
import Rules from '../container/Rules';
import Dicer from './Dicer';

class Settings extends React.Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      finished: false,
      stepIndex: 0,
    }
    //this.handleNext.bind(this);
    //this.handlePrev.bind(this);
    //this.getStepContent.bind(this);
  }


  handleNext() {
    const {stepIndex} = this.state;
    if (stepIndex >= 1) {
      if (!this.props.startDice()) {
        return false;
      }
    }
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev() {
    const {stepIndex} = this.state;
    if (stepIndex >= 2) {
      if (!this.props.startDice()) {
        return false;
      }
    }
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  getStepContent(stepIndex) {

    switch (stepIndex) {
      case 0:
        return (
          <Rules
            {...this.props}
            />
        );
      case 1:
        return (
          <Teams
            {...this.props}
            />
        );
      default:
        return (
          <span className="ParticipantTitle">
            <h2 className={this.props.inAction}>Participants {this.props.actualParticipant} roll the dices!</h2>

            <Dicer
              {...this.props}
              dice={this.props.dice }
              />
          </span>
        );
    }
  }

  renderStepActions(stepIndex,finished) {
    
    const hideStyle = { display: 'none' };
    const contentStyle = { margin: '0 16px' };
    
    return finished ? (
      <div style={contentStyle}>
        <p>
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              this.setState({ stepIndex: 0, finished: false });
            } }
            >
            Click here
          </a> to reset the example.
        </p>
      </div>
    ) : (
        <div style={contentStyle}>
          {this.getStepContent(stepIndex) }
          <div style={{ marginTop: 12 }}>
            <FlatButton
              label="Back"
              disabled={stepIndex === 0}
              onClick={this.handlePrev.bind(this) }
              style={{ marginRight: 12 }}
              />
            <RaisedButton
              label={stepIndex === 2 ? 'Finish' : 'Next'}
              style={stepIndex === 2 ? hideStyle : ''}
              primary={true}
              onClick={this.handleNext.bind(this) }
              />
          </div>
        </div>
      );
  }

  render() {
    const {finished, stepIndex} = this.state;

    return (
      <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step>
            <StepLabel>Participants</StepLabel>
            <StepContent>
              {this.renderStepActions(stepIndex,finished) }
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Teams</StepLabel>
            <StepContent>
              {this.renderStepActions(stepIndex,finished) }
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Dice</StepLabel>
            <StepContent>
              {this.renderStepActions(stepIndex,finished) }
            </StepContent>
          </Step>
        </Stepper>
      </div>
    );
  }
}

export default Settings;
