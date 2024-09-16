const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("Hello app");
});

module.exports = router;
