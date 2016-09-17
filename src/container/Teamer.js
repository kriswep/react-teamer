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
        members: 0
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

  start() {
    if (this.state.inAction) {
      // Zurücksetzen
      this.setState({ inAction: false });
    } else {
      // Starten
      this.setState({ inAction: true });
    }
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

    const indexedTeams = this.state.teams.map((team, index) => {
      team.teamIndex = index;
      return team;
    });
    const openTeams = indexedTeams.filter((team) => {
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

    const newTeams = indexedTeams.map((team, index) => {
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
