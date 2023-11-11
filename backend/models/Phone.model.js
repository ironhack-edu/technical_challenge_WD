const { Schema, model } = require("mongoose");

const phoneSchema = new Schema(
  {
    id: {
      type: Number,
      required: [true, 'ID is required.'],
      unique: true
    },
    name: {
      type: String,
      required: [true, 'Name is required.'],
      trim: true
    },
    manufacturer: {
      type: String,
      required: [true, 'Manufacturer is required.'],
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Description is required.'],
      trim: true
    },
    color: {
      type: String,
      required: [true, 'Color is required.'],
      trim: true
    },
    price: {
      type: Number,
      required: [true, 'Price is required.']
    },
    imageFileName: {
      type: String,
      required: [true, 'Image file name is required.'],
      trim: true
    },
    screen: {
      type: String,
      required: [true, 'Screen is required.'],
      trim: true
    },
    processor: {
      type: String,
      required: [true, 'Processor is required.'],
      trim: true
    },
    ram: {
      type: Number,
      required: [true, 'RAM is required.']
    }
  }
);

const Phone = model("Phone", phoneSchema);

module.exports = Phone;
