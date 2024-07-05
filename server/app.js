PORT = 5005;
const express = require("express");
const morgan = require("morgan");
const data = require("./data/phones.json");
const cors = require("cors");
const path = require("path");

const app = express();

//Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use('/assets', express.static(path.join(__dirname, 'assets')));

//Route to get all phones
app.get("/phones", (req, res) => {
  res.json(data);
});

app.get("/phones/:id", (req, res) => {
  const { id } = req.params;
  res.json(data[id]);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
