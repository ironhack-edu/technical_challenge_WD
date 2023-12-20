// config/index.js

const express = require("express");

// https://www.npmjs.com/package/morgan
const logger = require("morgan");

// https://www.npmjs.com/package/path
const path = require("path");

// https://www.npmjs.com/package/cookie-parser
const cookieParser = require("cookie-parser");

const cors = require("cors"); 
const CLIENT_URL = process.env.ORIGIN || "http://localhost:5173";

module.exports = (app) => {
  app.set("trust proxy", 1);

  app.use(
    cors({
      credentials: true,
      origin: [process.env.CLIENT_URL],
    })
  );

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};