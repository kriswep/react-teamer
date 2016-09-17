import React from 'react';

const RuleForm = ({setRules, rules}) => {
  // Input tracker
  const state = {
    members : rules.members
  }
    
  function makeRule(rules, members){
    rules.members = members;
    
    return rules;
  }
  
  function changeRule(e){
    state.members = e.target.value;
    setRules(state);
  }
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
    }}>
      <input
        onChange={changeRule} 
        value={state.members}/>
      <button onClick={(e) => {
        e.preventDefault();
        setRules(state);
        //members.value = 0;
      }} >+</button>
     </form>
  );
  
}

export default RuleForm;
