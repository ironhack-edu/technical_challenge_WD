const mongoose = require('mongoose');
const Phone = require('../models/Phone.model');
require('dotenv').config();
const phoneData = require('../../../data/phones.json');

async function seedData() {
  try {
    /* CONNECT */
    const MONGO_URI =
      process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/the-phone-cave';
    const conn = await mongoose.connect(MONGO_URI);
    console.log(
      `Connected to Mongo! Database name: "${conn.connections[0].name}"`
    );

    /* WARNING: DELETE EXISTING DATA */
    await Phone.deleteMany({});

    /* SEED PRODUCTDATA */
    const phonesFromDB = await Phone.insertMany(phoneData);
    console.log(`Number of phone created... ${phonesFromDB.length} `);

    /* CLOSE DB CONNECTION */
    mongoose.connection.close();
  } catch (e) {
    console.log('error seeding data in DB....', e);
  }
}

seedData();
