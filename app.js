const http = require('http');
const routes = require('./routes');

console.log(routes.sometext);

let server = http.createServer(routes.handler);

// let server = http.createServer(routes);

server.listen(5001);