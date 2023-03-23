const router = require("express").Router()

const { response } = require("../app")
const Phones = require('./../models/Phone.model')

router.get("/getAllPhones", (req, res, next) => {
  Phones
    .find()
    .sort({ title: 1 })
    .then(response => setTimeout(() => res.json(response), 1000))
    .catch(err => next(err))
})

router.get("/getOnePhone/:phone_id", (req, res, next) => {

  const { phone_id } = req.params

  Phones
    .findById(phone_id)
    .then(response => res.json(response))
    .catch(err => next(err))
})

module.exports = router
