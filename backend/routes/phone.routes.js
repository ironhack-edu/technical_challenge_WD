const router = require("express").Router();
const phoneData = require('../data/phones.json')

router.get('/phones', (req, res) => {
    res.json(phoneData)
})

router.get('/phones/:id', (req, res) => {
    const {id} = req.params
    const selectedPhone = phoneData.filter((findPhone) => findPhone.id === parseInt(id))
    res.json(selectedPhone)
})

module.exports = router;