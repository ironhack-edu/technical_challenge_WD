const mongoose = require("mongoose");

const PhoneSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    manufacturer: {
      type: String,
    },
    description: {
      type: Array,
      default: [],
    },
    color: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required: true
    },
    imageFileName: {
        type: String,
        required: true
    },
    screen: {
        type: String,
        required:true
    },
    processor: {
        type: String,
        required:true,
    },
    ram: {
        type: Number,
        required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Phone", PhoneSchema);