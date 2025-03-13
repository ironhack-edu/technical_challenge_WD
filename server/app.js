const express = require("express");
const app = express();
const cors = require("cors");

const router = require("./routes/routes");

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use(router);
app.use(express.json());

app.listen(3000, () => {
  console.log("app listening to port 3000");
});
