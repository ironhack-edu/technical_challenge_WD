var express = require("express");
var router = express.Router();
const phones = require("../data/phones.json")

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.json(phones);
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  let reqPhone = phones.find((phone) => {
    return phone.id == id;
  });
  res.json(reqPhone);
});

module.exports = router;
