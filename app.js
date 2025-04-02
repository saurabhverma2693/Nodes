const http = require('http');
const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

// let server = http.createServer(routes);

server.listen(5001);