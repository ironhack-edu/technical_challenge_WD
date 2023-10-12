const express = require("express");
const cookieParser = require("cookie-parser");
// ℹ️ Needed to accept requests from 'the outside'. CORS stands for cross origin resource sharing
// unless the request is made from the same domain, by default express wont accept POST requests
const cors = require("cors");
const FRONTEND_URL = process.env.ORIGIN || "http://localhost:3000";


module.exports = (app) => {
    // Because this will be hosted on a server that will accept requests from outside and it will be hosted ona server with a `proxy`, express needs to know that it should trust that setting.
    // Services like Fly use something called a proxy and you need to add this to your server
    app.set("trust proxy", 1);

    // controls a very specific header to pass headers from the frontend
    app.use(
        cors({
            origin: [FRONTEND_URL],
        })
    );

    // To have access to `body` property in the request
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
};
