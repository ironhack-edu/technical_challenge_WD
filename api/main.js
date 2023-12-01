const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const fs = require('fs');
const app = express();


app.use(express.json());

const phonesData = JSON.parse(fs.readFileSync('../api/data/phones.json','utf-8')) // fs = File System module to read phones.json; utf-8 is a common character of encoding that supports vast range of characters

// Shows the phone list

app.get('/api/phones', (req,res) => {
    res.json(phonesData);
})

// Shows the specific phone you want

app.get("/api/phones/:id", (req,res) => {
    const { id } = req.params;
    const phone = phonesData.find((p) => p.id === parseInt(id))

    if (!phone) {
        return res.status(404).json({ error: 'Phone not found' });
    }

    res.json(phone);
});



app.listen(3000, () => {
    console.log("Backend server is running!");
  });