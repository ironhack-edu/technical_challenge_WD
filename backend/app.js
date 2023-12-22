// require("dotenv").config();
const express = require("express");

const app = express();

// require('./config')(app);

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const phoneRoutes = require("./routes/phone.routes");
app.use("/", phoneRoutes);

module.exports = app;
