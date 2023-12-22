require("dotenv").config();
const cors = require("cors");

const express = require("express");
const app = express();

const phones = require("./data/phones.json");

app.use(cors());

app.get("/", (req, res) => {
  res.json("Server is Running!");
});

app.get("/phones", (req, res) => {
  res.json(phones);
});

app.get("/phones/:phoneId", (req, res) => {
  const { phoneId } = req.params;
  const foundPhone = phones.filter((phone) => {
    return phone.id == phoneId;
  });
  res.json(foundPhone);
});

const PORT = 5005;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
