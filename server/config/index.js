
const express = require("express");

// ℹ️ Responsible for the messages you see in the terminal as requests are coming in
// https://www.npmjs.com/package/morgan
const logger = require("morgan");

// https://www.npmjs.com/package/path
const path = require("path");

// ℹ️ Needed when we deal with cookies (we will when dealing with authentication)
// https://www.npmjs.com/package/cookie-parser
const cookieParser = require("cookie-parser");

const cors = require("cors"); 
const CLIENT_URL = process.env.ORIGIN || "http://localhost:5006";

// Middleware configuration
module.exports = (app) => {
  // Because this is a server that will accept requests from outside and it will be hosted ona server with a `proxy`, express needs to know that it should trust that setting.
  // Services like heroku use something called a proxy and you need to add this to your server
  app.set("trust proxy", 1);

  app.use(
    cors({
      credentials: true,
      origin: [process.env.CLIENT_URL],
    })
  );


   // Handles access to the public folder
  //  app.use(express.static(path.join(__dirname, "..", "public")));

  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};
