const express = require('express');
const app = express();
const mongoose = require("mongoose");

var cors = require("cors");
var logger = require("morgan");
var path = require("path");




var indexRouter = require("./routes/index");
var phonesRouter = require('./routes/phones');


app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));


app.use("/", indexRouter);
app.use('/phones', phonesRouter);

app.use(
    cors({
      origin: [process.env.REACT_APP_URI],
    })
  );

mongoose
 .connect("mongodb://localhost:27017")
 .then(x => console.log(`Connected to Database: "${x.connections[0].name}"`))
 .catch(err => console.error("Error connecting to MongoDB", err));







module.exports = app;

