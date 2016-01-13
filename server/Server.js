const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const serveStatic = require('serve-static');

const createServer = config => {
  const server = express();

  server.use(morgan('dev'));
  server.use(serveStatic(path.resolve(__dirname, '../public')));
  server.use(bodyParser.json());

  // respond to request (when failure case)
  server.use((err, req, res, next) => {
    res
      .status(err.status || 500)
      .json({
        error: err.message,
        result: {},
      });
  });

  return server;
};

module.exports = createServer;
