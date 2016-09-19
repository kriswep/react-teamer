import React, { Component } from 'react';

import TeamForm from '../presentation/TeamForm';
//import TeamList from '../presentation/TeamList';
import './Teams.css';

class Teams extends Component {
  /*
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
  */
  render() {
    return (
      <div className='Teams-container'>
        <span
          className={this.props.inAction}>
          <TeamForm
            addTeam={this.props.addTeam }/>
        </span>
      </div>
    )
  }

}

export default Teams;

