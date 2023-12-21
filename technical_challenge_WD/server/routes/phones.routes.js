// phones.routes.js
const express = require("express");
const router = express.Router();
const phonesJson = require("../data/phones.json");

router.get("/", (req, res) => {
  res.json(phonesJson);
});

module.exports = router;
