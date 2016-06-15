var User = function(ws) {
  this.ws = ws;
};

[
  'login',
  'get',
  'register'
].forEach(function(method) {
  User.prototype[method] = require('./' + method);
});

module.exports = User;
