const express = require('express');
const phones = require('../models/Phones');

const router = express.Router();

// Route to show all phones
router.get('/', (req, res) => {
res.json(phones);
});

// Route to show a specific phone by ID
router.get('/:id', (req, res) => {
const id = req.params.id;
const phone = phones.find(p => p.id == id);
if (!phone) {
res.status(404).send('Phone not found');
} else {
res.json(phone);
}
});

module.exports = router;