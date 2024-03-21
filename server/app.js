const express = require('express');
const cors = require('cors');
const phonesData = require('../data/phones.json');

const app = express();
const port = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());

app.get('/phones', (req, res) => {
  res.json(phonesData);
});

app.get('/phones/:id', (req, res) => {
  const id = req.params.id;
  const phone = phonesData.find(phone => phone.id == id);
  if (!phone) {
    res.status(404).send('Phone not found');
  } else {
    res.json(phone);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
