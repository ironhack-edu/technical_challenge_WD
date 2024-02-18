// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const { handleNotFoundError, handleServerError } = require('./error-handling/error.handler');

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

const phonesRoutes = require("./routes/phone.routes");
app.use('/phones', phonesRoutes);




app.listen(port, () => {
    console.log(`Server is working with port ${3001}`)
});