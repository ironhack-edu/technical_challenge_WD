
require('dotenv').config();
const cors = require('cors');

const express = require('express');
const app = express();

const phones = require('./data/phones.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is Running!');
});

app.get('/phones', (req,res) => {
    res.send(phones)
})

app.get('/phones/:phoneId', (req,res) => {
    const {phoneId} = req.params;
    const foundPhone = phones.filter((phone) =>{ return phone.id == phoneId});
    res.send(foundPhone);
})

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
)
