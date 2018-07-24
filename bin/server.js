'use strict'

const app = require('../src/app');
const http = require('http').Server(app);
const debug = require('debug')('appLocation:server');

//const port = process.env.PORT || 3000;
//app.set('port', port);

//const server = http.Server(app);

//server.listen(port);
//console.log("API rodando porta " + port);

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on', http.address().port);
});

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}