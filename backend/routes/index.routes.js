const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Phone = require("../models/Phone.model");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// /phones get show all phones
router.get("/phones", async(req, res, next) => {
 try{
  const phones = await Phone.find()
  res.status(200).json(phones)
} catch (error) {
  res
    .status(500)
    .json({ error: "Status code: 500 (Internal Server Error)" });
}
})
// /phones/:id get 1 phone   

module.exports = router;
