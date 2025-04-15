const http = require('http');

const express = require('express');
const app = express();

// const routes = require('./routes');



const server = http.createServer(app);

// let server = http.createServer(routes);

server.listen(5001);