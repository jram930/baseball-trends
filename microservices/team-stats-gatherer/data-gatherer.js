'use strict'

var request = require('request');

const ABBREV_LOOKUP = {
  braves: 'atl',
  cubs:  'chc',
  reds:  'cin',
  rockies:  'col',
  dodgers:  'lad',
  marlins:  'mia',
  brewers:  'mil',
  mets:  'nym',
  phillies:  'phi',
  pirates:  'pit',
  padres:  'sd',
  giants:  'sf',
  cardinals:  'stl',
  nationals:  'wsh',
  orioles:  'bal',
  redsox:  'bos',
  whitesox:  'chw',
  indians:  'cle',
  tigers:  'det',
  astros:  'hou',
  royals:  'kc',
  angels:  'laa',
  twins:  'min',
  yankees:  'nyy',
  athletics:  'oak',
  mariners:  'sea',
  rays:  'tb',
  rangers:  'tex',
  bluejays:  'tor'
}

class DataGatherer {
  constructor(teamName) {
    this.teamName = teamName;
    this.abbrev = ABBREV_LOOKUP[teamName];
  }

  gather() {
    return new Promise((resolve, reject) => {
      request('http://www.espn.com/mlb/team/stats/batting/_/name/' + this.abbrev, (error, response, html) => {
        resolve(html);
      });
    });
  }
}

module.exports =  DataGatherer;