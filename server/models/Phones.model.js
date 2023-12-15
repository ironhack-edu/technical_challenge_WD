const { Schema, model } = require("mongoose")

const phonesSchema = new Schema(
    {
        id: {
            type: Number
        },
        name: {
            type: String
        },
        manufacturer: {
            type: String
        },
        description: {
            type: String
        },
        color: {
            type: String
        },
        price: {
            type: Number
        },
        imageFileName: {
            type: String
        },
        screen: {
            type: String
        },
        processor: {
            type: String
        },
        ram: {
            type: Number
        }
    },
    {
        timestamps: true
    }
)

const Phones = model("Phones", phonesSchema)

module.exports = Phones