const { Schema, model } = require('mongoose')

const phoneSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'El nombre es obligatorio']
        },
        manufacturer: {
            type: String,
            required: [true, 'El fabricante es obligatorio']
        },
        description: {
            type: String,
            required: [true, 'La descripción es obligatoria'],
            minlength: [20, 'La descripción debe tener min. 20 caracteres']
        },
        color: {
            type: String,
            required: [true],
        },
        price: {
            type: Number,
            required: [true],
        },
        imageFileName: {
            type: String,
            required: [true],
        },
        screen: {
            type: String,
            required: [true],
        },
        processor: {
            type: String,
            required: [true],
        },
        ram: {
            type: Number,
            required: [true],
        },
    },
    {
        timestamps: true
    }
)

const Phone = model('Phone', phoneSchema)

module.exports = Phone
