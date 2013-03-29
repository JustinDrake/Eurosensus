var http = require('http');
var util = require('util');
var server = require('./server.js').server;
var record = require('./database.js').record;

function daysLeft(endDate) {
    var millisecondDifference = new Date(endDate).getTime() - Date.now();

    return Math.floor(millisecondDifference / (1000 * 60 * 60 * 24));
}

// Deal with more than one match
// Deal with no matches
// Abstract code
// Make regExes updatable
// ??? A match can happen between chunks

server.post('/ecocide', function (req, res) {
    http.get('http://www.endecocide.eu/?lang=en', function (getResponse) {
        getResponse.on('data', function (chunk) {
            var piece = chunk.toString('utf8');
            var match = piece.match(/var counts = "(\d+)"/);

            if(match !== null) {
                record(match[1]);

                return res.send({
                    totalVotes: match[1]
                });
            }
        });
    });
});

server.post('/media-pluralism', function (req, res) {
    http.get('http://www.mediainitiative.eu/', function (getResponse) {
        getResponse.on('data', function (chunk) {
            var piece = chunk.toString('utf8');
            var match = piece.match(/marginB10">(\d+)\.(\d+)<\/span>/);

            if(match !== null) {
                return res.send({
                    totalVotes: match[1] + match[2]
                });
            }
        });
    });
});

server.post('/right-to-water', function (req, res) {
    http.get('http://www.right2water.eu/', function (getResponse) {
        getResponse.on('data', function (chunk) {
            var piece = chunk.toString('utf8');
            var match = piece.match(/<p class="counter">(\d+),(\d+),(\d+)/);

            if(match !== null) {
                return res.send({
                    totalVotes: match[1] + match[2] + match[3]
                });
            }
        });
    });
});

server.post('/stop-vivisection', function (req, res) {
    http.get('http://stopvivisection.eu/', function (getResponse) {
        getResponse.on('data', function (chunk) {
            var piece = chunk.toString('utf8');
            var match = piece.match(/<strong>Status: (\d+)\.(\d+)/);

            if(match !== null) {
                return res.send({
                    totalVotes: match[1] + match[2]
                });
            }
        });
    });
});

