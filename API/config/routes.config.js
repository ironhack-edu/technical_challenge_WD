const express = require ("express");
const router = express.Router();
const phoneController = require('../controllers/phone.controller');

router.get('/phones', phoneController.list);
router.get('/phones/:id', phoneController.detail);


module.exports= router;