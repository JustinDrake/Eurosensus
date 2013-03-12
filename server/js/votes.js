var http = require('http');
var util = require('util');
var server = require('./server.js').server;
var record = require('./database.js').record;

function daysLeft(endDate) {
    var millisecondDifference = new Date(endDate).getTime() - Date.now();

    return Math.floor(millisecondDifference / (1000 * 60 * 60 * 24));
}

server.post('/ecocide', function (req, res) {
    http.get('http://www.endecocide.eu/?lang=en', function (getResponse) {
        // ??? A match can happen between chunks
        getResponse.on('data', function (chunk) {
            var piece = chunk.toString('utf8');
            var match = piece.match(/var counts = "(\d+)"/);

            if(match !== null) {
                record(match[1]);

                return res.send({
                    daysLeft: daysLeft('2014-02-18'),
                    totalVotes: match[1]
                });
            }
        });
    });
});
