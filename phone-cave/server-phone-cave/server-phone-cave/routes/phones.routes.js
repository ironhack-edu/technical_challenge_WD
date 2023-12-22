const router = require("express").Router();
const phonesJson = require("../data/phones.json")

router.get("/phones", (req, res, next) => {
  res.json(phonesJson);
});

router.get("/phones/:id", (req, res, next) => {
    res.json(phonesJson);
  });

module.exports = router;
