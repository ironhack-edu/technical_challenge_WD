const express = require('express');
const app = express();
const phones = require('../data/phones.json');

// Route to show all phones
app.get('/phones', (req, res) => {
  res.json(phones);
});

// Route to show a specific phone by ID
app.get('/phones/:id', (req, res) => {
  const id = req.params.id;
  const phone = phones.find(p => p.id == id);
  if (!phone) {
    res.status(404).send('Phone not found');
  } else {
    res.json(phone);
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
