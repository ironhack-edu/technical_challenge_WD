const express = require("express");
const cors = require('cors')
const indexRoutes = require("./routes/index.routes");
const phonesRoutes = require("./routes/phones.routes");

const app = express();
app.use(cors())

app.use(
    cors({
      // Add the URLs of allowed origins to this array
      origin: [process.env.ORIGIN] || "http://localhost:5173"
    })
  );
  
app.use("/", indexRoutes)
app.use("/", phonesRoutes)


module.exports = app;