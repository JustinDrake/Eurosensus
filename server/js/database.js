var mongoose = require('mongoose');

// Connect to the database
mongoose.connect('localhost', 'users');

// User schema
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

// Record schema
var RecordSchema = mongoose.Schema({
    votes: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
        'default': Date.now,
        index: { unique: true }
    }
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    cb(null, this.password === candidatePassword);
};

// Define our model
var User = mongoose.model('Users', UserSchema);
var Record = mongoose.model('Records', RecordSchema);

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

function record(votes) {
    new Record({
        votes: votes
    }).save();

    Record.find({}, null, {sort: {username: 1}}, function (err, records) {
        // console.log(records.length);
    });
}

module.exports = {
    findOne: findOne,
    findAll: findAll,
    add: add,
    record: record
};
