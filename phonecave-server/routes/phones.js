var express = require('express');
var router = express.Router();
const phones = require('../data/phones.json');

/* GET users listing. */
router.get('/', function (req, res, next) {
	/* res.send('respond with a resource'); */
	res.json(phones);
});

module.exports = router;
