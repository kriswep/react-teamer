import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DoneIcon from 'material-ui/svg-icons/action/done';

const TodoForm = ({addTeam}) => {

  const state = {
    team: {
      name: "",
      min: "",
      max: "",
      members: 0,
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
  function changeName(e) {
    state.team.name = e.target.value || "Team";
  }
  function changeMin(e) {
    state.team.min = e.target.value || 0;
  }
  function changeMax(e) {
    state.team.max = e.target.value || 0;
  }

  return (
    <div>
      <TextField
        floatingLabelText="Team name"
        hintText="What's the teams' name?"
        fullWidth={true}
        type="text"
        defaultValue={state.team.name}
        onChange={changeName}
        />

      <TextField
        floatingLabelText="Minimum members"
        hintText="Minimum team members."
        fullWidth={true}
        type="number"
        onChange={changeMin}
        />

      <TextField
        floatingLabelText="Maximum members"
        hintText="Maximum team members."
        fullWidth={true}
        type="number"
        onChange={changeMax}
        />

      <RaisedButton
        label="Add team"
        labelPosition="after"
        primary={true}
        icon={<DoneIcon />}
        style={style}
        onClick={(e) => {
          e.preventDefault();
          addTeam(state.team);
        } }
        />
    </div>
  );
};

export default TodoForm;
