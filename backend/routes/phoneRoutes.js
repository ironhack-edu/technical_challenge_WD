const express = require('express');
const router = express.Router();
const phonesData = require('../data/phones.json');

router.get('/', (req, res) => {
  res.json(phonesData);
});

module.exports = router;
