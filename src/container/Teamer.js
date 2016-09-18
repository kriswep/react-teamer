import React, { Component } from 'react';

import Teams from './Teams';
import Rules from './Rules';
import Dicer from '../presentation/Dicer';
import Message from '../presentation/Message';
import './Teamer.css';

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
      actualParticipant: 1,
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
      this.setState({
        actualParticipant: 1,
        inAction: false
      }
      );
    } else {
      // Starten
      if (this.state.rules.participants <= 0) {
        this.setState({
          message: {
            text: `Tell me how many participants I should assign to a team!`,
            severity: 'error'
          }
        });
        return;
      } else if (this.state.teams.length <= 0) {
        this.setState({
          message: {
            text: `Tell me the teams conditions!`,
            severity: 'error'
          }
        });
        return;
      } else if (this.state.rules.participants < this.calculateNeededMembers()) {
        this.setState({
          message: {
            text: `Not enough participants to fill all teams`,
            severity: 'error'
          }
        });
        return;
      }
      this.setState({
        actualParticipant: 1,
        inAction: true,
        message: {
          text: `Roll the dices!`,
          severity: 'success'
        }
      });
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

    return neededMembers;
  }

  calculateAddedMembers() {
    const addedMembers = this.state.teams.reduce((addedMembers, team) => {
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


    let openTeams = this.state.teams.filter((team) => {
      return team.members < team.max;
    });
    if (this.state.rules.participants - this.calculateAddedMembers() <= this.calculateNeededMembers()) {
      // uhoh , we have barely enough participants left
      // prioritise teams in need 
      console.log("in need");
      openTeams = openTeams.filter((team) => {
        if (team.min - team.members > 0) {
          return true;
        }
        return false;
      })
    }
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
    const nextParticipant = (this.state.actualParticipant + 1 > this.state.rules.participants) ? this.state.actualParticipant : this.state.actualParticipant + 1;

    this.setState({
      teams: newTeams,
      lastTeamName: teamToAdd.name,
      actualParticipant: nextParticipant,
      message: {
        text: `Participant ${this.state.actualParticipant} added to ${teamToAdd.name}`,
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
        <span className="ParticipantTitle">
          <h2 className={this.state.inAction}>Participants {this.state.actualParticipant} roll the dices!</h2>
        </span>
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
