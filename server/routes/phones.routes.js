const express = require("express");
const router = express.Router();
const phonesData = require("../data/phones.json");

//GET Show all phones
router.get("/phones", (req, res) => {
  if (!phonesData) {
    res.status(404).json("Phones not found!");
  }
  res.status(200).json(phonesData);
});

//GET Show a phone details
router.get("/phones/:id", (req, res) => {
  const { id } = req.params;
  console.log("Received ID:", id);

  const onePhone = phonesData.find((phone) => phone.id === Number(id));
  console.log("Found Phone:", onePhone);

  if (!onePhone) {
    res.status(404).json("Phone not found!");
  }
  res.status(200).json(onePhone);
});

module.exports = router;
