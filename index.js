//index.js
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
  res.send('Welcome to The Phone Cave API');
});

app.get('/phones', (req, res) => {
    fs.readFile('./data/phones.json', (err, data) => {
      if (err) {
        res.status(500).send('Error reading phones data');
        return;
      }
      const phones = JSON.parse(data);
      res.json(phones);
    });
});

app.get('/phones/:id', (req, res) => {
  const phoneId = parseInt(req.params.id);
  fs.readFile('./data/phones.json', (err, data) => {
    if (err) {
      res.status(500).send('Error reading phones data');
      return;
    }
    const phones = JSON.parse(data);
    const phone = phones.find(p => p.id === phoneId);
    if (phone) {
      res.json(phone);
    } else {
      res.status(404).send('Phone not found');
    }
  });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});