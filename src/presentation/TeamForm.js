import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DoneIcon from 'material-ui/svg-icons/action/done';

const TodoForm = ({addTeam, defaultTeam}) => {
 let name, min, max;
  const state = {
    team: {
      name: defaultTeam.name,
      min: defaultTeam.min,
      max: defaultTeam.max,
      members: defaultTeam.members,
    }
  };

  const style = {
    margin: 12,
  };
  /*
  function makeTeam(team, name = "Team", min = 0, max = 0) {
    team.name = name || "Team";
    team.min = min || 0;
    team.max = max || 5;

    return team;
  };
  */
  /*
  function changeName(e) {
    state.team.name = e.target.value || "Team";
  }
  function changeMin(e) {
    state.team.min = e.target.value || 0;
  }
  function changeMax(e) {
    state.team.max = e.target.value || 0;
  }
  */
  
  function makeTeam(){
    state.team.name = name.input.value || 'Team';
    state.team.min = min.input.value || 0;
    state.team.max = max.input.value || 0;
    const added = addTeam(state.team);
    if ( added ) {
      name.input.value = added.name;
      min.input.value = added.min;
      max.input.value = added.max;
    } 
  }

  return (
    <div>
      <TextField
        floatingLabelText="Team name"
        hintText="What's the teams' name?"
        fullWidth={true}
        type="text"
       
        ref={node => {
        name = node;
      }}
        />

      <TextField
        floatingLabelText="Minimum members"
        hintText="Minimum team members."
        fullWidth={true}
        type="number"
        ref={node => {
        min = node;
      }}
        />

      <TextField
        floatingLabelText="Maximum members"
        hintText="Maximum team members."
        fullWidth={true}
        type="number"
        ref={node => {
        max = node;
      }}
        />

      <RaisedButton
        label="Add team"
        labelPosition="after"
        primary={true}
        icon={<DoneIcon />}
        style={style}
        onClick={(e) => {
          e.preventDefault();
          makeTeam();
          //state.team.name = state.team.name || 'Team';
          //state.team.min = state.team.min || 0;
          //state.team.may = state.team.max || 0;
          //addTeam(state.team);
          //state.team.name = "";
        } }
        />
    </div>
  );
};

export default TodoForm;
