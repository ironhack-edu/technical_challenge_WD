const router = require("express").Router();
const phonesList = require("../data/phones.json")

router.get("/", (req, res, next) => {
  res.json(phonesList);
});

router.get("/:id", (req, res, next) => {
    const onePhone = Object.keys(phonesList).find((item) => item === req.params.id);
    res.json(phonesList[onePhone]);
})

module.exports = router;
