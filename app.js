const express = require("express");
const logger = require("morgan");
const phonesData = require("./data/phones.json");

const app = express();

// MIDDLEWARE
app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  console.log(req);
});

app.get("/phones", (req, res) => {
  res.json(phonesData);
});

app.get("/phones/:id", (req, res) => {
  const phoneId = req.params.id;
  const phone = phonesData.find((phone) => phone.id === parseInt(phoneId));
  if (phone) {
    res.json(phone);
  } else {
    res.status(404).json({ error: "Phone not found" });
  }
});

app.listen(3000, () => console.log("App listening on port 3000!"));
