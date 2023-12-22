const router = require("express").Router()
const phones = require("../data/phones.json")

// routes -> /api/phones
router.get("/", (req, res, next) => {
    res.status(200).json(phones)
})

module.exports = router