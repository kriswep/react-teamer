import React, { Component } from 'react';

import Teams from './Teams';
import Rules from './Rules';
import Dicer from '../presentation/Dicer';
import Message from '../presentation/Message';

class Teamer extends Component {
  constructor(props) {
    //pass to parent
    super(props);
    //set initial state
    this.state = {
      rules: {
        participants: 0
      },
      teams: [],
      lastTeamAddedInto: 0,
      message: {
        text: "",
        severity: "",
      },
      inAction: false,
    }
  }
  // Lifecycle method
  componentDidMount() {
  }

  setRules(rules) {
    if (this.state.inAction) {
      // no team changes when in action
      return;
    }
    this.setState({ rules: rules });
  }

  addTeam(team) {
    if (this.state.inAction) {
      // no team changes when in action
      return;
    }
    if (team.min > team.max) {
      this.setState({
        message: {
          text: "Min value must be smaller max value.",
          severity: "error",
        }
      });
      return;
    }

    this.state.teams.push(team);
    this.setState({ teams: this.state.teams });
  }
  removeTeam(teamIndex) {
    if (this.state.inAction) {
      // no team changes when in action
      return;
    }
    const newTeams = this.state.teams.filter((team, index) => {
      if (teamIndex !== index) {
        return team;
      }
      return null;
    });

    this.setState({ teams: newTeams });
  }

  resetTeams() {
    const resetTeams = this.state.teams.map((team, index) => {
      team.teamIndex = index;
      team.members = 0;
      return team;
    });

    this.setState({
      teams: resetTeams
    })
  }

  start() {
    if (this.state.inAction) {
      // Zurücksetzen
      this.setState({ inAction: false });
    } else {
      // Starten
      if (this.state.rules.participants < this.calculateNeededMembers()) {
        this.setState({
          message: {
            text: `Not enough participants to fill all teams`,
            severity: 'error'
          }
        });
        return;
      }
      this.setState({ inAction: true });
    }
    
    this.resetTeams();
  }

  calculateNeededMembers() {
    const neededMembers = this.state.teams.reduce((neededMembers, team) => {
      const neededMembersInTeam = team.min - team.members;
      if (neededMembersInTeam > 0) {
        neededMembers += neededMembersInTeam
      }
      return neededMembers;
    }, 0);
    console.log(neededMembers);

    return neededMembers;
  }
  
  calculateAddedMembers() {
    const addedMembers = this.state.teams.reduce((addedMembers, team) =>{
      return addedMembers += team.members;
    }, 0);
    
    return addedMembers;
  }

  dice() {
    if (!this.state.inAction) {
      this.setState({
        message: {
          text: `Done managing team conditions? Press GO.`,
          severity: 'error'
        }
      });
      return;
    } 
    if (this.state.rules.participants <= this.calculateAddedMembers()) {
      this.setState({
        message: {
          text: `Everybody should be assigned to a team.`,
          severity: 'success'
        }
      });
      return;
    }
    
    this.calculateNeededMembers();

    const openTeams = this.state.teams.filter((team) => {
      return team.members < team.max;
    });
    if (openTeams.length <= 0) {
      this.setState({
        lastTeamName: '',
        message: {
          text: `No open teams found!`,
          severity: 'error'
        }
      });
      return;
    }
    const teamToAddIndex = Math.floor(Math.random() * openTeams.length);
    const teamToAdd = openTeams.find((team, index) => {
      return index === teamToAddIndex;
    })

    const newTeams = this.state.teams.map((team, index) => {
      if (team.teamIndex === teamToAdd.teamIndex) {
        team.members++;
      }
      return team;
    })
    this.setState({
      teams: newTeams,
      lastTeamName: teamToAdd.name,
      message: {
        text: `Participant added to ${teamToAdd.name}`,
        severity: 'success'
      }
    });
  }

  render() {
    return (
      <div>
        <Message
          message={this.state.message}
          />
        <Rules
          {...this.state}
          setRules={this.setRules.bind(this) }
          />
        <Teams
          {...this.state}
          addTeam={this.addTeam.bind(this) }
          removeTeam={this.removeTeam.bind(this) }
          />
        <button onClick={this.start.bind(this) }>{this.state.inAction ? 'Restart' : 'GO'}</button>
        <Dicer
          {...this.state}
          dice={this.dice.bind(this) }
          lastTeamName={this.state.lastTlastTeamNameeamAddedInto}
          />
      </div>
    )
  }
}

export default Teamer;
