const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

const phonesData = require("../data/phones.json");

app.use(express.json());
app.use(cors());

// Route to get all phones
app.get("/phones", (req, res) => {
  res.json(phonesData);
});

// Route to get phone details by id
app.get("/phones/:id", (req, res) => {
  const phoneId = req.params.id;
  const phone = phonesData.find((phone) => {
    return phone.id == phoneId;
  });

  if (phone) {
    res.json(phone);
  } else {
    res.status(404).json({ message: "Phone not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
