var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://172.18.0.2:27017/team-stats');
const TeamStats = require('./team-stats.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(req, res, next) {
    console.log('Received call!');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'Baseball Trends API' });
});

router.get('/latest/teams', function(req, res) {
    res.json({ message: 'Getting all teams latest stats' });
});

router.get('/latest/teams/:teamName', function(req, res) {
    let teamName = req.params.teamName;
    TeamStats.find({teamName: teamName}).exec((err, stats) => {
        if(err) {
            console.log(err);
        }
        if(teamName == 'braves') {
            console.log('c');
            console.log(stats[stats.length-1]);
        }
        res.json({ teamStats: stats[stats.length-1] });
    });
});

router.get('/teams/:teamName/count', function(req, res) {
    let teamName = req.params.teamName;
    TeamStats.find({teamName: teamName}).exec((err, stats) => {
        if(err) {
            console.log(err);
        }
        res.json({ statsCount: stats.length });
    });
    //res.json({ message: 'Getting stats count for ' + teamName});
});

app.use('/api', router);

app.listen(port);
console.log('API running on port ' + port);

