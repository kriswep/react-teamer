import React from 'react';

const TodoForm = ({addTeam}) => {
  // Input tracker
  let teamName;
  let teamMin;  
  let teamMax;
  
  const team = {
    name: "",
    min: "",
    max: "",
    members: 0,
  }; 
  
  function makeTeam(team, name = "Team", min = 0, max = 0 ) {
      team.name = name || "Team";
      team.min = min || 0;
      team.max = max || 5;
      
      return team;
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
    } }>
      <input ref={node => {
        teamName = node;
      } } />
      <input ref={node => {
        teamMin = node;
      } } />
      <input ref={node => {
        teamMax = node;
      } } />
      <button onClick={(e) => {
        e.preventDefault();
        addTeam(makeTeam(team, teamName.value, 
          teamMin.value, teamMax.value) );
        teamName.value = '';
        teamMin.value = 0;
        teamMax.value = 5;
      } }>
        +
      </button>
    </form>
  );
};

export default TodoForm;
