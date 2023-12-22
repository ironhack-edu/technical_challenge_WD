const express = require("express");
const router = express.Router();
const phoneData = require("../data/phones.json")

router.get("/phones", (req, res, next) => {

    res.json(phoneData)
})

router.get("/phones/:phoneId", (req, res, next) => {

    const { phoneId } = req.params

    const selectedPhone = phoneData.filter(phone => phone.id === parseInt(phoneId))

    res.json(selectedPhone)
})

module.exports = router;
