const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema({
  id: Number,
  name: String,
  manufacturer: String,
  description: String,
  color: String,
  price: Number,
  imageFileName: String,
  screen: String,
  processor: String,
  ram: Number,
});

const Phone = mongoose.model("Phone", phoneSchema);

module.exports = Phone;
