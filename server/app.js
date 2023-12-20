// app.js

require("dotenv").config();

const express = require("express");

const app = express();

require("./config")(app);

const indexRoutes = require("./routes/index.routes.js");
app.use("/api", indexRoutes);

const phonesRoutes = require("./routes/phones.routes");
app.use("/api", phonesRoutes);

require("./error-handling")(app);

module.exports = app;