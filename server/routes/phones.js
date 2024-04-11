const express = require("express");
const router = express.Router();
const Phone = require("../models/Phone.model")

router.get("/", (req, res, next) => {
Phone.find({})
.then((phones) => {
    console.log("Got phones ====>", phones);
    res.json(phones)
})
.catch((error) => {
    console.error("Error while retrieving phones ->", error);
    res.status(500).json({ errorMsg: "Failed to retrieve phones", error });
  });
});

router.get("/:phoneId", (req, res, next) => {
  Phone.findById(req.params.phoneId)
  .then((phone) => {
    console.log("Found phone ====>", phone);
    res.json(phone);
  })
  .catch((error) => {
    console.error("Failed to retrieve phone ->", error);
    res.json({ errorMsg: "Failed to retrieve phone", error });
  });
});


module.exports = router;