require ("dotenv").config();
const express = require ("express");
const logger = require ("morgan");

require ("./config/db.config");
const app = express();

const api= require ("./config/routes.config");
app.use("/v1", api);
app.use(logger("dev"));

const port = process.env.PORT || 3000;

app.listen(port, () => console.info(`Application running at port ${port}`));