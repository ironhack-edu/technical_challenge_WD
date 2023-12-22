const express = require("express");
const indexRoutes = require("./routes/index.routes");
const phonesRoutes = require("./routes/phones.routes");

const app = express();

app.use("/", indexRoutes)
app.use("/", phonesRoutes)


module.exports = app;