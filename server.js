const express = require('express');
const bodyParser = require('body-parser');
const phonesData = require('./phones.json'); // Assuming phones.json is in the same directory

const app = express();
const port = 5005; // Set your desired port

app.use(bodyParser.json());

// Route to show all phones
app.get('/phones', (req, res) => {
  res.json(phonesData);
});

// Route to show a phone by ID
app.get('/phones/:id', (req, res) => {
  const phoneId = req.params.id;
  const phone = phonesData.find((p) => p.id == phoneId);

  if (phone) {
    res.json(phone);
  } else {
    res.status(404).json({ error: 'Phone not found' });
  }
});

// Start the 
app.listen(port, () => {
  console.log(` is running on http://localhost:${port}`);
});
