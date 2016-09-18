import React from 'react';

const RuleForm = ({setRules, rules}) => {
  // Input tracker
  const state = {
    participants : rules.participants
  }
 
  function changeRule(e){
    state.participants = e.target.value;
    setRules(state);
  }
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
    }}>
      <input
        onChange={changeRule} 
        value={state.participants}/>
      <button onClick={(e) => {
        e.preventDefault();
        setRules(state);
        //participants.value = 0;
      }} >+</button>
     </form>
  );
  
}

export default RuleForm;
