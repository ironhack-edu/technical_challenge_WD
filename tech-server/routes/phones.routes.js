const router = require("express").Router();
const phones = require("../../data/phones.json");


// GET /api/phones
router.get("/phones", (req, res, next) => {
    console.log(phones);
    res.json(phones)
})

// GET /api/phones/:phoneId 
router.get("/phones/:phoneId", (req, res, next) => {
    const {phoneId} = req.params;

    const phoneDetails = phones.filter((phone) => Number(phoneId) === phone.id)

    res.json(phoneDetails)
})

module.exports = router;