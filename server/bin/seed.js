const mongoose = require("mongoose");
const fs = require("fs");
const Phone = require("../models/Phone.model");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/phones-srv";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", async () => {
  console.log("Connected to MongoDB");
});

const jsonFilePath = "../data/phones.json";

// Read the JSON file
const jsonData = fs.readFileSync(require.resolve(jsonFilePath), {
  encoding: "utf8",
});

const phones = JSON.parse(jsonData);

// Seed the data into MongoDB
Phone.insertMany(phones)
  .then(() => {
    console.log("Data seeding completed");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("Error seeding data:", error);
    mongoose.connection.close();
  });
