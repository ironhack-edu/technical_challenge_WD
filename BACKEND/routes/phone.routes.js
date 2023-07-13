const router = require("express").Router();
const mongoose = require("mongoose");
const phones = require("../data/phones.json");

// GET ALL THE PHONES from the API
router.get("/phones", (req, res, next) => {
  res.json(phones);
});

// GET one phone from the API
router.get("/phones/:id", (req, res, next) => {
  const id = req.params.id;
  const onePhone = phones.find((phone) => phone.id === id);
  res.json(onePhone);
});

module.exports = router;

