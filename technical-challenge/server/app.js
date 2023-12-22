require("dotenv").config();
require("./db");
const express = require("express");
const app = express();
require("./config")(app);
const phonesData = require("./data/phones.json");

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

app.get("/api/phones", (req, res, next) => {
  res.json(phonesData);
});

app.get("/api/phones/:id", (req, res) => {
  const { id } = req.params;

  const phone = phonesData.find((phone) => phone.id == id);  //doesnt work when its triple equal

  res.json(phone);
});

require("./error-handling")(app);

module.exports = app;
