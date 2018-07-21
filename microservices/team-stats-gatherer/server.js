const DataGatherer = require('./data-gatherer.js');
const DataCleaner = require('./data-cleaner.js');
const DataStorer = require('./data-storer.js');


const TEAM_NAME = 'nationals';
const MONGO_URL = 'mongodb://172.18.0.2:27017/team-stats';

var dataGatherer = new DataGatherer(TEAM_NAME);

console.log('Starting baseball trends application...');

function run() {
  dataGatherer.gather().then((html) => {
    var dataCleaner = new DataCleaner(TEAM_NAME);
    var teamStats = dataCleaner.extractStatsFromDom(html);
    var dataStorer = new DataStorer(MONGO_URL);
    dataStorer.storeTeamStats(teamStats);
  });
}

run();

setInterval(() => {
  run();
}, 30000);