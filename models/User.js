var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true
    },
    type : {
        type : String,
        default : 'basic'
    }
});

var User = mongoose.model('User',userSchema);

User.getUsers = function(callback){
    User.find(callback);
};


module.exports = User;
