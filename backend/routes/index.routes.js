const router = require("express").Router();
const { json } = require("express");
const jsonFile = require("../phones.json");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/phones", (req, res, next) => {
  res.json(jsonFile);
});

router.get("/phones/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const foundPhone = jsonFile.filter((e) => e.id === Number(id));
    res.json(foundPhone);
  } catch (err) {
    console.error("no phone");
    res.json("no phone");
  }
});

module.exports = router;
