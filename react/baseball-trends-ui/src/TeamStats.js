import React, { Component } from 'react';
import TeamBox from './TeamBox';

class TeamStats extends Component {
  render() {
    return (
      <ol className="team-stats">
      <TeamBox teamName='Diamondbacks'/>
      <TeamBox teamName='Braves'/>
      <TeamBox teamName='Cubs'/>
      <TeamBox teamName='Reds'/>
      <TeamBox teamName='Rockies'/>
      <TeamBox teamName='Dodgers'/>
      <TeamBox teamName='Marlins'/>
      <TeamBox teamName='Brewers'/>
      <TeamBox teamName='Mets'/>
      <TeamBox teamName='Phillies'/>
      <TeamBox teamName='Pirates'/>
      <TeamBox teamName='Padres'/>
      <TeamBox teamName='Giants'/>
      <TeamBox teamName='Cardinals'/>
      <TeamBox teamName='Nationals'/>
      <TeamBox teamName='Orioles'/>
      <TeamBox teamName='RedSox'/>
      <TeamBox teamName='WhiteSox'/>
      <TeamBox teamName='Indians'/>
      <TeamBox teamName='Tigers'/>
      <TeamBox teamName='Astros'/>
      <TeamBox teamName='Royals'/>
      <TeamBox teamName='Angels'/>
      <TeamBox teamName='Twins'/>
      <TeamBox teamName='Yankees'/>
      <TeamBox teamName='Athletics'/>
      <TeamBox teamName='Mariners'/>
      <TeamBox teamName='Rays'/>
      <TeamBox teamName='Rangers'/>
      <TeamBox teamName='BlueJays'/>
      </ol>
    );
  }
}

export default TeamStats;
