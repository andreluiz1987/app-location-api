'use strict'

const app = require('../src/app');
const http = require('http')
const debug = require('debug')('appLocation:server');

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

console.log("API rodando porta " + port);

