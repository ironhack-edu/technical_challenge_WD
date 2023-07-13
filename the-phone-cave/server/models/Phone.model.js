const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const phoneSchema = new Schema({
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

module.exports = model('Phone', phoneSchema);
