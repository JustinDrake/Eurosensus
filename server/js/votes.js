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

var data = [{
    id: 'ecocide',
    url: 'http://www.endecocide.eu/?lang=en',
    regEx: /var counts = "(\d+)"/
}, {
    id: 'media-pluralism',
    url: 'http://www.mediainitiative.eu/',
    regEx: /marginB10">(\d+)\.(\d+)<\/span>\s+signatures/
}, {
    id: 'right-to-water',
    url: 'http://www.right2water.eu/',
    regEx: /<p class="counter">(\d+),(\d+),(\d+)/
}, {
    id: 'stop-vivisection',
    url: 'http://stopvivisection.eu/',
    regEx: /<strong>Status: (\d+)\.(\d+)/
}];

var votes = {};

function updateData() {
    data.forEach(function (initiative) {
        http.get(initiative.url, function (getResponse) {
            getResponse.on('data', function (chunk) {
                var piece = chunk.toString('utf8');
                var match = piece.match(initiative.regEx);

                if(match !== null) {
                    votes[initiative.id] = match[1] + (match[2] ? match[2] : '') + (match[3] ? match[2] : '');
                }
            });
        });
    });

    console.log('\nVotes:\n', votes);
}

server.post('/votes', function (req, res) {
    res.send(votes);
});

updateData();
setInterval(updateData, 60 * 1000);
