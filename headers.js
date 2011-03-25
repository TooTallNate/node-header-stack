var inspect = require('util').inspect;

function Headers() {
  var rtn = new Array();
  rtn.__proto__ = Headers.prototype;
  return rtn;
}
module.exports = Headers;

Headers.prototype.__proto__ = Array.prototype;

Headers.prototype._addHeader = function addHeader(line, key, value, index) {
  line = new String(line);
  line.key = key;
  line.value = value;
  this[index] = line;
  this[key] = this[key.toLowerCase()] = value;
}

// A custom 'inspect' function for util.inspect to use on these mutant
// header Arrays. Otherwise they're extremely ugly to `console.log`.
Headers.prototype.inspect = function headerInspect() {
  var len = this.length;
  if (len == 0) return '[]';
  var str = '';
  this.forEach(function(header, i) {
    str += (i == 0 ? '[ ' : '  ') +
           inspect(header.key) + ': ' +
           inspect(header.value) +
           (i != len-1 ? ',\n' : ' ]');
  });
  return str;
}
