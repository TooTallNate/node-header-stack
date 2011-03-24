
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
