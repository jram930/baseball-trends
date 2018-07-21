import React, { Component } from 'react';
import TeamBox from './TeamBox';

class TeamStats extends Component {
  render() {
    return (
      <ol className="team-stats">
      <TeamBox teamName='Nationals'/>
      </ol>
    );
  }
}

export default TeamStats;
