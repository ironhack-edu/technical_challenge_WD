var express = require('express');
var router = express.Router();
const phones = require('../public/data/phones.json');

/* GET home page. */
router.get('/phones', function (req, res, next) {
	/* res.send('respond with a resource'); */
	res.json(phones);
});

/* GET Phones by ID */
router.get('/phones/:id', function (req, res, next) {
	/* res.send('respond with a resource'); */
	const id = req.params.id;
	const phone = phones.find((phone) => phone.id == id);

	if (!phone) {
		return res.status(404).send('The phone with the given ID was not found.');
	}
	res.json(phone);
});

module.exports = router;
