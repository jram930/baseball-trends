import React, { Component } from 'react';

class TeamBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      teamStats: null
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/latest/teams/' + this.props.teamName.toLowerCase())
    .then(res => res.json())
    .then((result) => {
      this.setState({
        isLoaded: true,
        teamStats: result.teamStats
      });
    });
  }

  render() {
    let teamClass = 'team-box ' + this.props.teamName.toLowerCase();
    if(!this.state.isLoaded) {
      return (
        <div className={teamClass}>
          <p>{this.props.teamName}</p>
          <p>Loading...</p>
        </div>
      );
    } else {
      return (
        <div className={teamClass}>
          <p>{this.props.teamName}</p>
          <p>{this.state.teamStats.wins} wins</p>
          <p>{this.state.teamStats.losses} losses</p>
        </div>
      );
    }
  }
}

export default TeamBox;
