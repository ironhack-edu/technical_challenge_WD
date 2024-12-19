const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const phones = require("../phone-cave-server/data/phones.json");

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/phones", (req, res) => {
  res.json(phones);
});

app.get("/phones/:id", (req, res) => {
  const phone = phones.find((phone) => phone.id === Number(req.params.id));
  if (phone) {
    res.json(phone);
  } else {
    res.status(404).json({ message: "Phone not found" });
    console.log("Response: Phone not found");
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
