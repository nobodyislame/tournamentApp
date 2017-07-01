var mongoose = require('mongoose');
var Player = require('./Player.js');

var matchSchema = mongoose.Schema({
    winnerId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Player'
    },
    loserId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Player'
    }
});

var Match = mongoose.model('Match', matchSchema);

Match.addMatch = function(newMatch, callback){

}


module.exports = Match;
