require('dotenv').config();
const cors = require('cors');

const express = require('express');
const app = express();

const phones = require('./data/phones.json');

app.use(cors());


app.get('/phones', (req,res) => {
    res.send(phones)
})

app.get('/phones/:id', (req,res) => {
    const {id} = req.params;
    const phoneFound = phones.filter((phone) =>{ return phone.id == id});
    res.send(phoneFound);
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
)