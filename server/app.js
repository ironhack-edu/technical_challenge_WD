require("dotenv").config()

require("./data/phones.json")

const express = require("express")

const app = express()

require("./config")(app)

require("./routes")(app)

require("./error-handling")(app)

module.exports = app
