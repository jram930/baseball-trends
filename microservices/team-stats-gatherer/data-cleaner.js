'use strict';


const cheerio = require('cheerio');
const TeamStats = require('./team-stats.js');

class DataCleaner {
  constructor(teamName) {
    this.teamName = teamName;
    this.$ = null;
    this.teamStats = TeamStats({
      teamName: this.teamName,
      players: []
    });
  }

  extractStatsFromDom(html) {
    this.$ = cheerio.load(html);

    this.extractPlayerStats();

    return this.teamStats;
  }

  extractPlayerStats() {
    const $ = this.$;
    var rows = $($('table')[0]).find('tr');
    console.log('\n\n********************************************************************************');
    for(var i=2; i<rows.length-2; i++) {
      var playerName = $($(rows[i]).find('td')[0]).find('a')[0].children[0].data;
      if(playerName != undefined) {
        console.log(playerName);
        var cells = $(rows[i]).find('td');
        this.teamStats.players.push({
          playerName: playerName,
          gamesPlayed: cells[1].children[0].data,
          atBats: cells[2].children[0].data,
          runs: cells[3].children[0].data,
          hits: cells[4].children[0].data,
          doubles: cells[5].children[0].data,
          triples: cells[6].children[0].data,
          homeRuns: cells[7].children[0].data,
          runsBattedIn: cells[8].children[0].data,
          totalBases: cells[9].children[0].data,
          walks: cells[10].children[0].data,
          strikeouts: cells[11].children[0].data,
          stolenBases: cells[12].children[0].data,
          battingAverage: cells[13].children[0].data,
          onBasePercentage: cells[14].children[0].data,
          slugging: cells[15].children[0].data,
          onBasePlusSlugging: cells[16].children[0].data,
          owar: cells[17].children[0].data
        })
      }
    }
  }
}

module.exports = DataCleaner;
