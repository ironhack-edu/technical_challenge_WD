import express from "express";
import app from "express";
import * as dotenv from "dotenv";
import phoneRouter from "./routes/phonesData";


const phonesData = require('../data/phones.json');

app.use(phoneRouter);

// get all phones
app.get('/phones', (req, res) => {
    res.json(phonesData);
});

// get phones by ID
app.get('/phones/:id', (req, res) => {
    const phoneId = req.params.id;
    const phone = phonesData.find((phone) => phone.id === phoneId);

    if (!phone) {
        res.status(404).json({ message: 'Phone not found' });
    } else {
        res.json(phone);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});