const express = require('express');
const app = express();
const cors = require('cors');
const phonesData = require('./data/phones.json'); 

app.use(cors());

app.get('/phones', (req, res) => {
    res.json(phonesData);
});

app.get('/phones/:id', (req, res) => {
    const phoneId = +req.params.id;
    const phone = phonesData.find(phone => phone.id === phoneId);
    res.json(phone);
});

const PORT = 3001; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
