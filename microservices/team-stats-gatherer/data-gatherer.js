'use strict'

var http = require('http');
var https = require('https');
var jsdom = require('jsdom');
var jquery = require('jquery');
var request = require('request');

class DataGatherer {
  constructor(teamName) {
    console.log('constructing for ' + teamName);
    this.teamName = teamName;
  }

  gather() {
    return new Promise((resolve, reject) => {
      console.log('gathering for ' + this.teamName);
      request('http://www.espn.com/mlb/team/stats/batting/_/name/wsh', (error, response, html) => {
        resolve(html);
      });
    });
  }
}

module.exports =  DataGatherer;