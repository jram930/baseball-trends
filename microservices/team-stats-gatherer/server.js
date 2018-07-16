const DataGatherer = require('./data-gatherer.js');
const DataCleaner = require('./data-cleaner.js');

const TEAM_NAME = 'nationals';

var dataGatherer = new DataGatherer(TEAM_NAME);

console.log('Starting baseball trends application!!!!!1');

setInterval(() => {
  dataGatherer.gather().then((html) => {
    var dataCleaner = new DataCleaner(TEAM_NAME);
    var teamStats = dataCleaner.extractStatsFromDom(html);
  });
}, 3600000);