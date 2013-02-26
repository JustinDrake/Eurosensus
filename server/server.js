var express = require('express');
var http = require('http');
var os = require('os');
var exec = require('child_process').exec

function ipAddress(callback) {
    var ip;

    os.networkInterfaces()['en1'].forEach(function (entry) {
        if(entry.family === 'IPv4') {
            ip = entry.address;
        }
    });

    return ip;
}

function createServer() {
    var server = express()
        .use(express.cookieParser())
        .use(express.bodyParser())
        .use(express.compress())
        .use(express.static(__dirname + '/../client/'));

    // Create the HTTP server
    http
        .createServer(server)
        .listen(2000, ipAddress());
}

(function startDatabase() {
    // Kill existing mongod instances
    exec('killall -15 mongod', function (err, stdout, stderr) {
        // Start mongod instance
        exec('mongod --dbpath ./db', function (err, stdout, stderr) {
            if(err) {
                console.error('Database error! Aborting.');
                console.error(err, stdout, stderr);
                process.exit(1);
            }
        }).stdout.on('data', function (data) {
            // Wait until the database has started to continue
            if(/waiting for connections on port 27017/.test(data)) {
                createServer();
            }
        });
    });
}());
