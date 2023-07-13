const router = require('express').Router();

const phones = require("../../data/phones.json"); // fake data

// const Phone = require('../models/phone.model'); // db unnecessary...

// GET /phones
router.get('/phones', (req, res, next) => {
  res.json(phones);
});

// GET /phones/:id
router.get('/phones/:id', (req, res, next) => {
  const phoneId = req.params.id;
  const phone = phones.filter(p => p.id == phoneId)[0]; // in fake data, the id is of type Number but params in req are received as String values
  res.json(phone);
});

module.exports = router;