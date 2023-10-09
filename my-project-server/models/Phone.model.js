const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    manufacturer: {
        type: String,
    },
    description: {
        type: String,
    },
    color: {
        type: String,
    },
    price: {
        type: Number,
    },
    imageFileName: {
        type: String,
    },
    screen: {
        type: String,
    },
    processor: {
        type: String,
    },
    ram: {
        type: Number,
    },
});

const Phones = mongoose.model("Phones", phoneSchema);

module.exports = Phones;
