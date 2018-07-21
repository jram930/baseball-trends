import React, { Component } from 'react';
import './App.css';
import PageHeader from './PageHeader';
import TeamStats from './TeamStats';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader title='Team Stats' />
        <TeamStats />
      </div>
    );
  }
}

export default App;
