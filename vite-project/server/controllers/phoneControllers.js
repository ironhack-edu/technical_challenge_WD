// controllers/phonesController.js
const express = require("express");
const router = express.Router();
const { getAllPhones, getPhoneById } = require("../services/phoneService");

router.get("/", (req, res) => {
  res.json(getAllPhones());
});

router.get("/:id", (req, res) => {
  const phone = getPhoneById(req.params.id);

  if (phone) {
    res.json(phone);
  } else {
    res.status(404).send({ message: "Phone not found" });
  }
});

module.exports = router;
