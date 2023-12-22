const express = require("express");
const app = express();
const cors = require("cors");
const phonesData = require("./phones.json");

app.use(cors());

app.get("/phones", (req, res) => {
  res.json(phonesData);
});

app.get("/phones/:id", (req, res) => {
  const phoneId = req.params.id;
  const phone = phonesData.find((p) => p.id === parseInt(phoneId));
  if (!phone) {
    res.status(404).json({ error: "Phone not found" });
  } else {
    res.json(phone);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
