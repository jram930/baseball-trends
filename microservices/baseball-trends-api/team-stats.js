var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamStatsSchema = new Schema({
    teamName: String,
    wins: Number,
    losses: Number,
    divisionRank: Number,
    division: String,
    players: [{
        playerName: String,
        gamesPlayed: Number,
        atBats: Number,
        runs: Number,
        hits: Number,
        doubles: Number,
        triples: Number,
        homeRuns: Number,
        runsBattedIn: Number,
        totalBases: Number,
        walks: Number,
        strikeouts: Number,
        stolenBases: Number,
        battingAverage: Number,
        onBasePercentage: Number,
        slugging: Number,
        onBasePlusSlugging: Number,
        owar: Number
    }],
    createdAt: Date
});

teamStatsSchema.pre('save', function(next) {
    if(!this.createdAt) {
        var now = new Date();
        this.createdAt = now;
    }
    next();
});

var TeamStats = mongoose.model('TeamStats', teamStatsSchema);

module.exports = TeamStats;