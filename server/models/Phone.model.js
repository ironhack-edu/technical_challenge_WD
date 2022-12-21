const { Schema, model } = require("mongoose")

const phoneSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
		},
		manufacturer: {
			type: String,
			required: [true, "Manufacturer is required"],
		},
		description: {
			type: String,
			required: [true, "Description is required"],
			minlength: [10, "Description must be at least 10 characters long"],
		},
		color: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		imageFileName: {
			type: String,
			required: true,
		},
		screen: {
			type: String,
			required: true,
		},
		processor: {
			type: String,
			required: true,
		},
		ram: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

const Phone = model("Phone", phoneSchema)

module.exports = Phone
