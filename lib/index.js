var Users = require('./users');
var Session = require('./session');

module.exports = function soundcove(url) {
  /* global WebSocket */
  var ws = new WebSocket(url);
  var soundcove = new Users(ws);

  soundcove.ws = ws;
  soundcove.Users = Users;
  soundcove.Session = Session;

  return soundcove;
};
