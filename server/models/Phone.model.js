const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const phoneSchema = new Schema ({
  name: String,
  manufacturer: String,
  description: String,
  color: String,
  price: Number,
  imageFileName: String,
  screen: String,
  processor: String,
  ram: String
})

const Phone = mongoose.model("Phone", phoneSchema)



module.exports = Phone;

// "id": 0,
// "name": "iPhone 7",
// "manufacturer": "Apple",
// "description": "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
// "color": "black",
// "price": 769,
// "imageFileName": "IPhone_7.png",
// "screen": "4,7 inch IPS",
// "processor": "A10 Fusion",
// "ram": 2
// },