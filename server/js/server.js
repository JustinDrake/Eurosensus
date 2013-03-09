var express = require('express');
var http = require('http');
var os = require('os');
var exec = require('child_process').exec;

function ipAddress(callback) {
    var ip;

    os.networkInterfaces().en1.forEach(function (entry) {
        if(entry.family === 'IPv4') {
            ip = entry.address;
        }
    });

    return ip;
}

require('./passport.js');
passport = require('passport');

(function createServer() {
    server = express()
        .use(express.cookieParser())
        .use(express.session({secret: 'EuroSensus rocks!'}))
        .use(passport.initialize())
        .use(passport.session())
        .use(express.bodyParser())
        .use(express.compress())
        .use(function (req, res, next) {
            if(req.url === '/') {
                console.info(req.connection.remoteAddress, new Date());
            }

            next();
        })
        .use(express.static(__dirname + '/../client/'));

    // Create the HTTP server
    http
        .createServer(server)
        .listen(2000, ipAddress());
}());


server.get('/auth/facebook', function (req, res) {
    console.log('/auth/facebook');
    passport.authenticate('facebook')(req, res);
});

server.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/' }), function(req, res) {
    // Successful authentication, redirect home.
    console.log('Going home');
    res.redirect('/');
});

server.post('/username', function (req, res) {
    res.send(req.user && req.user.username);
});

module.exports = {
    server: server
};

require('./votes.js');