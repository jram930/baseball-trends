var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamStatsSchema = new Schema({
    teamName: String,
    players: [{
        playerName: String
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