const express = require('express');
const phones = require('../data/phones.json');
const app = express();

app.get('/phones', (req, res) => {
    res.json(phones);
});

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const phone = phones.find(phone => phone.id === id);
    if (!phone) {
        res.status(404).json({ message: 'Phone not found' });
    } else {
        res.json(phone);
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
