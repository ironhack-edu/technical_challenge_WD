const router = require("express").Router()

const Phone = require('./../models/Phone.model')

router.get("/phones", (req, res, next) => {
    Phone
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get("/phones/:id", (req, res, next) => {
    const { id } = req.params

    Phone
        .findById(id)
        .then(response => res.json(response))
        .catch(err => next(err))

})

router.post("/newPhone", (req, res, next) => {

    const { name, manufacturer, description, color, price, imageFileName, screen, processor, ram } = req.body

    Phone
        .create({ name, manufacturer, description, color, price, imageFileName, screen, processor, ram })
        .then(response => res.json(response))
        .catch(err => next(err))

})

module.exports = router


