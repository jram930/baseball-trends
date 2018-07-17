'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

class DataStorer {
    constructor(mongoUrl) {
        this.mongoUrl = mongoUrl;
    }

    storeTeamStats(stats) {
        mongoose.connect(this.mongoUrl, {useNewUrlParser: true});
        stats.save((err) => {
            if(err) {
                console.log(err);
            } else {
                console.log('Saved!');
            }
        });
        // mongoose.connection.close();
    }
}

module.exports = DataStorer;