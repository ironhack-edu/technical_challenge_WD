const express = require("express");
const router = express.Router();
const phoneData = require("../data/phones.json")

router.get("/phones", (req, res, next) => {

    res.json(phoneData)
})

router.get("/phones/:id", (req, res, next) => {

    const { id } = req.params

    const selectedPhone = phoneData.filter(phone => phone.id === parseInt(id))

    res.json(selectedPhone)
})

module.exports = router;
