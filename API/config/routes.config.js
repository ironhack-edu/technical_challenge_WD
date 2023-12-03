const express = require('express');
const router = express.Router();
const phonesController = require('../controllers/phones.controller');

router.get('/phones', phonesController.list);  
router.get('/phones/:id', phonesController.detail);


module.exports = router;
