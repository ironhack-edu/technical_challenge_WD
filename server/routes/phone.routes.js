const router = require("express").Router();
const phonesJson = require("../data/phones.json");

router.get("/api/phones", (req, res, next) => {
    res.json(phonesJson);
});

module.exports = router;
