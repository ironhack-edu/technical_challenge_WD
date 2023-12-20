// routes/phones.js

const express = require("express");
const router = express.Router();
const phonesData = require("../data/phones.json");

router.get("/phones", (req, res) => {
  if (!phonesData) {
    res.status(404).json("Phones not found!");
  }
  res.status(200).json(phonesData);
});

router.get("/phones/:id", (req, res) => {
  const { id } = req.params;

  const onePhone = phonesData.find((phone) => phone.id === Number(id));

  if (!onePhone) {
    res.status(404).json("Phone not found!");
  }
  res.status(200).json(onePhone);
});

module.exports = router;