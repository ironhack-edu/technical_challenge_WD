const { Schema, model } = require("mongoose");

const phoneSchema = new Schema(
    {
        name: {
            type: String,
        },
        manufacturer: {
            type: String,
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
        },
        imageFileName: {
            type: String,
        },
        manufacturer: {
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
        }


    },


);

const Phone = model("Phone", phoneSchema);

module.exports = Phone