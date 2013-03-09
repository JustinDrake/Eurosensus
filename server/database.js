var mongoose = require('mongoose');

// Connect to the database
mongoose.connect('localhost', 'users');

// Define our schema
var UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: { unique: true }
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    cb(null, this.password === candidatePassword);
};

// Define our model
var User = mongoose.model('Users', UserSchema);

function findOne(username, callback) {
    User.findOne({
        username: username
    }, callback);
}

function findAll(callback) {
    User.find({}, null, {sort: {username: 1}}, callback);
}

function add(user, callback) {
    new User(user).save(callback);
}

module.exports = {
    findOne: findOne,
    findAll: findAll,
    add: add
};
