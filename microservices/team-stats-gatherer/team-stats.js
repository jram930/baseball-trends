var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamStatsSchema = new Schema({
    teamName: String,
    players: [{
        
    }]
});