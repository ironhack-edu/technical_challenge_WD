const router = require("express").Router()
const phones = require('../data/phones.json')

router.get('/phones', (req, res, next) => {
  res.json(phones)
})

router.get('/phones/:id', (req, res, next) => {
  const { id } = req.params
  const searchPhone = phones.find((phone) => phone.id == id)
  res.json(searchPhone)
})

module.exports = router
