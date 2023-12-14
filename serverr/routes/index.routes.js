const router = require("express").Router();
const data = require('./../data/phones.json')


router.get("/", (req, res, next) => {
  res.json(data);
});

router.get("/:id", (req, res, next) => {
  const { id: phoneId } = req.params
  const phone = data.filter((e) => e.id == phoneId);
  res.json(...phone)
});

module.exports = router;
