const express = require("express");
const phonesData = require("../data/phones.json");
const cors = require("cors");

// Create an express server instance named `app`
// `app` is the Express server that will be handling requests and responses
const app = express();

app.use(cors());

// Configure Express to be able to read incoming HTTP request that contain JSON data in the body.
app.use(express.json());

const PORT = process.env.PORT || 5005;

app.get("/phones", (req, res) => {
  res.json(phonesData);
});

app.get("/phones/:id", (req, res) => {
  const phoneId = req.params.id;
  console.log(phoneId);
  const phone = phonesData.find((phone) => phone.id === Number(phoneId));
  console.log("Found phone:", phone);
  if (!phone) {
    console.log("Phone not found for ID:", phoneId);
    res.status(404).send("Phone not found");
  } else {
    res.json(phone);
  }
});
// Start the server
app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
