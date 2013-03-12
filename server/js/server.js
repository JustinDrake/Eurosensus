var express = require('express');
var http = require('http');
var os = require('os');
var exec = require('child_process').exec;
var passport = require('passport');

var seenIPs = {};

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
                if(!seenIPs[req.connection.remoteAddress]) {
                    seenIPs[req.connection.remoteAddress] = true;
                    console.info(req.connection.remoteAddress, new Date());
                }
            }

            next();
        })
        .use(express.static(__dirname + '/../../client/'));

    // Create the HTTP server
    http
        .createServer(server)
        .listen(2000, ipAddress());
}());

server.get('/auth/facebook', passport.authenticate('facebook'));

server.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/' }), function(req, res) {
    res.redirect('/');
});

server.post('/username', function (req, res) {
    res.send(req.user && req.user.displayName);
});

server.post('/logout', function (req, res) {
    req.logout();
    res.send('OK');
});

module.exports = {
    server: server
};

process.on('uncaughtException', function(err) {
    console.error(err);
});

require('./votes.js');