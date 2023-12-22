const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;

const phonesData = require('../backend/data/phones.json');

app.use(cors());
app.use(express.json());

app.get('/phones', (req, res) => {
  res.json(phonesData);
  console.log('Phone IDs types:', phonesData.map(phone => typeof phone.id));
});

app.get('/phones/:id', (req, res) => {
    const phoneId = parseInt(req.params.id, 10);
    const phone = phonesData.find(phone => parseInt(phone.id, 10) === phoneId);
    console.log('Found phone:', phone);
  
    if (phone !== undefined) {
      res.json(phone);
    } else {
      res.status(404).json({ message: 'Phone not found' });
    }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
