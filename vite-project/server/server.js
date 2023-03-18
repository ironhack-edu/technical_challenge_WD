const express = require("express");
const cors = require("cors");
const phonesController = require("./controllers/phoneControllers");

const app = express();

app.use(cors());

app.use("/assets", express.static("assets"));

app.use("/", phonesController);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
