const router = require("express").Router();
const phonesData = require("../data/phones.json");

router.get("/", (req, res, next) => {
  res.json(phonesData);
});

module.exports = router;