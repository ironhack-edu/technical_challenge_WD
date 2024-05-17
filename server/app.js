// Module Imports
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const data = require("../data/phones.json");


// Port
const PORT = 3000;

// Express app instance
const app = express();

app.use(cors({ origin: ["http://localhost:5173"] }));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// Get all phones
app.get("/phones", (req, res) => {
  res.status(200).json(data);
});

// Get phone by id
app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const responseData = data.filter(currentPhone => currentPhone.id === id);
  res.status(200).json(responseData);
})

// Listen express app instance
app.listen(PORT, () => {
  console.log("Server started on port ", PORT);
})