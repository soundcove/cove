var Session = function(ws, token) {
  this.ws = ws;
  this.token = token || '';
};

[
  'user',
  'renew',
  'destroy'
].forEach(function(method) {
  Session.prototype[method] = require('./' + method);
});

module.exports = Session;
