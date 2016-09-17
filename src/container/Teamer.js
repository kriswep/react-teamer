import React, { Component } from 'react';

import Teams from './Teams';
import Rules from './Rules';

class Teamer extends Component {
  constructor(props) {
    //pass to parent
    super(props);
    //set initial state
    this.state = {
      rules: {
        members: 0
      },
      teams: []
    }
  }
  // Lifecycle method
  componentDidMount() {
  } 
  
  setRules(rules) {
    this.setState({ rules: rules });
    console.log(this.state.rules);
    
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
        <Rules
          {...this.state}
          setRules={this.setRules.bind(this) }
          />
        <Teams
          {...this.state}
          addTeam={this.addTeam.bind(this) }
          removeTeam={this.removeTeam.bind(this) }
          
          />
      </div>
    )
  }
}

export default Teamer;
