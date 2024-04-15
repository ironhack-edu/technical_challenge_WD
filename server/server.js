const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 5005;

app.use("/images", express.static(path.join(__dirname, "images")));

// Read the JSON file and parse it
const getPhonesData = () => {
  const jsonData = fs.readFileSync("./data/phones.json");
  return JSON.parse(jsonData);
};

// Define the /phones route to get all phones
app.get("/phones", (req, res) => {
  const phones = getPhonesData();
  res.json(phones);
});

// Define the /phones/:id route to get a single phone detail
app.get("/phones/:id", (req, res) => {
  const phones = getPhonesData();
  const phone = phones.find((p) => p.id.toString() === req.params.id);
  if (phone) {
    res.json(phone);
  } else {
    res.status(404).send({ message: "Phone not found" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
