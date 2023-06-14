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
        color: {
            type: String,
        },
        price: {
            type: String,
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
            type: String,
        },

    },
    {
        timestamps: true
    }
);

const Phone = model("Phone", phoneSchema);

module.exports = Phone;