import React, { Component } from 'react';

import RuleForm from '../presentation/RuleForm';

class Rules extends Component {
  /*
  constructor(props) {
    //pass to parent
    super(props);
    //set initial state
    this.state = {
      rules: {
        members: 1
      }
    }
  }
  */
  /*
  setRules(rules) {
    //rules.members=5;
    this.setState({ rules: rules });
    console.log(this.state.rules);
    this.props.setRules(this.state.rules);
  }
  */
  render() {
    return (
      <div>
        <RuleForm
          setRules={this.props.setRules }
          rules={this.props.rules}
          />
      </div>
    )
  }
}

export default Rules;