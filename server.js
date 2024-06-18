const express = require("express");
const app = express();
const phonesData = require("./data/phones.json");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/phones", (req, res) => {
  res.json(phonesData);
});

app.get("/phones/:id", (req, res) => {
  const phoneId = req.params.id;
  const phone = phonesData.find((phone) => phone.id === parseInt(phoneId));
  console.log(phoneId);
  console.log("//");
  console.log(phone.id);
  if (phone) {
    res.json(phone);
  } else {
    res.status(404).json({ message: "Phone not found" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
