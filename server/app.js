const express = require("express");
const cors = require("cors");
const phones = require("../data/phones.json");

const app = express();
app.use(express.json());
app.use(cors());

app.use(cors({origin:
    ["http://localhost:5173/",
    "http://localhost:5173"]
  }))

app.get('/phones', (req, res) => {
    res.status(201).json(phones)
})

app.get('/phones/:id', (req, res) => {
    const { id } = req.params;
    const detailPhone = phones.find((phone) => phone.id === parseInt(id));
    res.status(201).json(detailPhone)
})

const server = app.listen(4000, () => {
    console.log(`Server listening on port 4000`);
});  

module.exports = server