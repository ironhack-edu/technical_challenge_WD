const router = require("express").Router();
const mongoose = require("mongoose");
const Phone = require("../models/Phone.model");

router.get("/phones", (req, res, next) => {
  Phone.find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log("error getting list of phones", err);
      res.status(500).json({
        message: "error getting list of phones",
        error: err,
      });
    });
});

router.get("/phones/:id", (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Phone.findById(id)
    .then((phone) => res.json(phone))
    .catch((err) => {
      console.log("error getting details of a phone", err);
      res.status(500).json({
        message: "error getting details of a phone",
        error: err,
      });
    });
});

module.exports = router;
