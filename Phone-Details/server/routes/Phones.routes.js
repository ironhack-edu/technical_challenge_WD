const router = require("express").Router();
const phones  = require("../db/data/phones.json")

router.get("/phones", (req, res, next) => {
  res.json(phones);
});

// router.get("/phones/:id", (req, res, next) => {
//     const {id}  = req.params
//     const phoneDetail = phones.findById(id)
//     res.json(phoneDetail);
//   });
  

module.exports = router;
