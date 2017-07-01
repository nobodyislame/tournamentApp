var mongoose = require('mongoose');
var Match = require('./Match');
var User = require('./User');

var tournamentSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    name : {
        type : String
    },
    matches : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Match'
        }
    ]
});

var Tournament = mongoose.model('Tournament', tournamentSchema);

module.exports = Tournament;
