const express = require("express");
const app = express();
const PORT = 4000;

const phonesData = require("../data/phones.json");

app.use(express.json());

// Route to get all phones
app.get("/phones", (req, res) => {
  res.json(phonesData);
});

// Route to get phone details by id
app.get("/phones/:id", (req, res) => {
  const phoneId = req.params.id;
  const phone = phonesData.find((phone) => {
    console.log(phone);
    console.log(phone.id);
    console.log(phoneId);
    return phone.id == phoneId;
  });

  if (phone) {
    res.json(phone);
  } else {
    res.status(400).json({ message: "Phone not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
