const express = require("express");
const cors = require("cors");
const app = express();

const phonesData = require("./data/phones.json");

app.use(cors());

app.get("/phones", (req, res) => {
  res.json(phonesData);
});

app.get("/phones/:id", (req, res) => {
  const foundPhone = phonesData.find(
    (phone) => phone.id === parseInt(req.params.id)
  );
  if (!foundPhone) {
    res.status(404).send("Phone not found");
  } else {
    res.json(foundPhone);
  }
});

module.exports = app;
