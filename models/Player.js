var mongoose = require('mongoose');

var playerSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    points :{
        type : Number,
        default : 0
    }
});

var Player = mongoose.model('Player', playerSchema);


Player.addPlayer= function(player, callback){
    Player.create(player, callback);
}

Player.getPlayers = function(callback){
    Player.find(callback);
}

Player.removePlayer = function(id, callback){
    var query = {_id : id};
    Player.remove(query,callback);
}
/*
Player.getById = function(id, callback){

}
Player.update = function(id, UpdatedPlayer, callback){

}
*/
module.exports = Player;
