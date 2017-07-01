var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var User = require('./models/User.js');
var Player = require('./models/Player.js');
var Match = require('./models/Match.js');
var Tournament = require('./models/Tournament.js');

mongoose.connect('mongodb://localhost/tournament', function(){
    console.log('connected to tournament..');
});


var app = express();
app.use(bodyParser.json());

/*Users Route*/
app.get('/users', function(req, res){
    User.getUsers(function(err, users){
        if(err)
            throw err;
        res.json(users);
    });
});

/*Player Routes*/
app.get('/players', function(req, res){
    Player.getPlayers(function(err, players){
        if(err)
            throw err;
        res.json(players);
    });
});

app.post('/players', function(req, res){
    var newPlayer = {
        name : req.body.name
    };
    var duplicate = false;
    Player.getPlayers(function(err, players){
        if(err)
            throw err;

        //console.log(players);

        players.forEach(function(player){
            if(player.name === newPlayer.name){
                duplicate = true;
            }
        });

        if(!duplicate){
            Player.addPlayer(newPlayer, function(err, player){
                if(err)
                    throw err;
                res.json(player);
            });
        }
        if(duplicate)
            res.json({message : 'Cannot create players with same names'});

    });

})

app.listen(3000, function(){
    console.log('started listening...');
});



