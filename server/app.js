require("dotenv").config()
require("./db")

const express = require("express")
const app = express()

require("./config")(app)

const routes = require('./routes')
app.use("/api", routes)

require("./error-handling")(app)

module.exports = app
