const Phone = require("./models/Phone.model")
const phones = require("./phones.json")

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/tech-challenge";


  const mongoose = require("mongoose")

  const seeddb = async () => {
    try {
    await mongoose.connect (MONGO_URI)
    const newPhones = await Phone.insertMany(phones)
    } catch (error) {
      console.log(error)
    }
  }

  seeddb()