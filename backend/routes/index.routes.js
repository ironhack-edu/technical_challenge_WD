const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// /phones get show all phones

// /phones/:id get 1 phone   

module.exports = router;
