const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = morgan("dev");
const cors = require("cors");

const data = require("./phones.json");
const PORT = 8080;

app.use(logger);
app.use(cors({ origin: ["http://localhost:5173"] }));

app.get("/phones", (req, res) => {
  res.json(data);
});

app.get("/phones/:id", (req, res) => {
  const { id } = req.params;

  const phone = data.find((phone) => phone.id === Number(id));
  if (!phone) {
    res.json({
      message: "Phone not found...",
    });
  }

  res.json(phone);
});

app.listen(PORT, () => {
  console.clear();
  console.log("Server 🏃🏽 on PORT " + PORT);
});
