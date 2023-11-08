const express = require('express');
const logger = require('morgan');
const cors = require('cors');

module.exports = (app) => {
  app.set('trust proxy', 1);

  // controls a very specific header to pass headers from the frontend
  app.use(
    cors({
      credentials: true,
      origin: process.env.ORIGIN || 'http://localhost:3000',
    })
  );

  // In development environment the app logs
  app.use(logger('dev'));

  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};
