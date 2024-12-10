/**
 * NodeJs 코어 모듈: http | https | fs | path | os
 */
const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);

server.listen(3001);