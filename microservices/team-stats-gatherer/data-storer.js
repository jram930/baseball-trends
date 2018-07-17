'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

class DataStorer {
    constructor(mongoUrl) {
        this.mongoUrl = mongoUrl;

    }

    

    storeTeamStats(teamStats) {
        mongoose.connect(this.mongoUrl);
    }
}

module.exports = DataStorer;