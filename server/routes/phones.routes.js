
const router = require("express").Router()

const phonesData = require("./../data/phones.json")

router.get("/", (req, res, next) => {
    res.json(phonesData)

})

router.get("/:id", (req, res, next) => {

    const { id } = req.params

    const onePhone = phonesData.find((phone) => phone.id === id)
    res.json(onePhone)

})

module.exports = router