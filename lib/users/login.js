module.exports = function(payload, cb) {
  var ws = this.ws;

  ws.send(JSON.stringify(payload));

  ws.onmessage = function(data) {
    if (data.method === 'error') {
      return cb(new Error(data.payload.type), null);
    }

    cb(null, data.payload);
  };
};
