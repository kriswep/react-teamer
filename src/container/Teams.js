import React, { Component } from 'react';

import TeamForm from '../presentation/TeamForm';
import TeamList from '../presentation/TeamList';

class Team extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      teams: []
    }
  }
  // Lifecycle method
  componentDidMount() {
  }

  addTeam(team) {
    this.state.teams.push(team);
    this.setState({ teams: this.state.teams });
  }
  removeTeam(teamIndex) {
    const newTeams = this.state.teams.filter((team, index) => {
      if (teamIndex !== index) {
        return team;
      }
      return null;
    });
    
    this.setState({ teams: newTeams});
    
  }
  render() {
    return (
      <div>
        <TeamForm addTeam={this.addTeam.bind(this) }/>
        <h2>Teams</h2>

        <TeamList
          teams={this.state.teams}
          remove={this.removeTeam.bind(this) }
          />
      </div>
    )
  }

}

export default Team;

