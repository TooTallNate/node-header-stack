var assert = require('assert');
var Stream = require('stream').Stream;
var Parser = require('../parser');

var body = new Buffer("test:1\r\n\r\nleftover");
var stream = new Stream();

var parser = new Parser(stream);
parser.on('headers', function(headers, leftover) {
  console.log(headers);
  console.log(leftover, leftover+'');
});

stream.emit('data', body);
stream.emit('end');
