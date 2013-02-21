var express = require('express');
var http = require('http');

(function createServer(ip, buffer) {
    var server = express()
        .use(express.cookieParser())
        .use(express.bodyParser())
        .use(express.compress())
        .use(express['static']('./../client/'));

    // Create the HTTP server
    http
        .createServer(server)
        .listen(2000, '192.168.1.70');

    console.log(__dirname);

    // server.get('/', function (req, res) {
    //     res.send('Bienvenue sur Eurosensus!');
    // });
}());