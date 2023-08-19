const http = require('http');
// const fs = require('fs'); // to work with file system
const { buffer } = require('stream/consumers');
const { parse } = require('path');

const routes = require('./routes');

const server = http.createServer(routes);

server.listen(1000);
