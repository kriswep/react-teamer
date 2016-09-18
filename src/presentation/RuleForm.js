import React from 'react';
import TextField from 'material-ui/TextField';
//import DoneIcon from 'material-ui/svg-icons/action/done';
//import FlatButton from 'material-ui/FlatButton';

const RuleForm = ({setRules, rules}) => {
  
  const state = {
    participants: rules.participants
  }

  function changeRule(e) {
    state.participants = e.target.value;
    setRules(state);
  }

  return (

    <TextField
      floatingLabelText="Number of participants"
      hintText="How many participants?"
      fullWidth={true}
      type="number"
      onChange={changeRule}
      value={state.participants}/>

  );
};

export default RuleForm;
