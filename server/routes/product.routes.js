const router = require("express").Router();
const phoneData = require("../data/phones.json")

router.get("/phones", (req, res) => {
    if (!phoneData) {
        res.status(404).json('Phones not found!')
    }
    res.status(200).json(phoneData)
})

router.get("/phones/:phoneId", (req, res) => {
    const { phoneId } = req.params;
    const foundPhone = phoneData.find((phone) => phone.id === Number(phoneId))
    if (!foundPhone) {
        res.status(404).json('Phone not found!')
    }
    res.status(200).json(foundPhone)
})


module.exports = router;