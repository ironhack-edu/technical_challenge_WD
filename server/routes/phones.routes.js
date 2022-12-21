const router = require("express").Router();
const phones = require('../../data/phones.json')

router.get("/", (req, res, next) => {
    res.json(phones)
});

router.get("/:id", (req, res, next) => {
    const { id: phone_id } = req.params
    const phone = phones.filter(elm => elm.id == phone_id)
    res.json(phone)
});


module.exports = router;
