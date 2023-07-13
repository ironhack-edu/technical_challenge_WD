const express = require('express');
const router = express.Router();

// **** require Phone model ****
const Phone = require('../models/Phone.model');

// GET "/api/phones" => Route to list all available phones
router.get('/phones', (req, res, next) => {
  Phone.find()
    .then((phonesFromDB) => res.status(200).json(phonesFromDB))
    .catch((err) => {
      console.log('Error GET list of phones', err);
      next(err);
    });
});

// GET "/api/phones/:id" => Route to details of one phone with id = id
router.get('/phones/:id', (req, res, next) => {
  const id = req.params.id;
  Phone.findById(id)
    .then((onePhoneFromDB) => res.status(200).json(onePhoneFromDB))
    .catch((err) => {
      console.log('Error GET details of one phone', err);
      next(err);
    });
});

module.exports = router;
