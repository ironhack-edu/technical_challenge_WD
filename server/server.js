const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const phones = require("./data/phones.json");

app.use(cors()); // Add this line

app.get("/phones", (req, res) => {
  res.json(phones);
});

app.get("/phones/:id", (req, res) => {
  const phone = phones.find((p) => p.id === parseInt(req.params.id));
  if (phone) {
    res.json(phone);
  } else {
    res.status(404).send("Phone not found");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
